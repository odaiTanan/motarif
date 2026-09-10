import { useEffect, useState } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { ArrowRight, BookOpen, CalendarClock, CheckCircle2, Clock3, ExternalLink, PlayCircle, Video } from 'lucide-react'
import { fetchStudentCourse, fetchStudentCourses, heartbeatStudentLecture, joinStudentLecture, leaveStudentLecture, type StudentEnrollment, type StudentLecture } from '../../api/management'

const dateText = (value: string | null) => value ? new Date(value).toLocaleString('ar-SA', { dateStyle: 'medium', timeStyle: 'short' }) : 'لم يحدد الموعد'

export default function StudentCoursesPage() {
  const queryClient = useQueryClient()
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const [activeLecture, setActiveLecture] = useState<number | null>(null)
  const coursesQuery = useQuery({ queryKey: ['student-courses'], queryFn: fetchStudentCourses })
  const detailQuery = useQuery({ queryKey: ['student-course', selectedId], queryFn: () => fetchStudentCourse(selectedId as number), enabled: selectedId !== null })
  const joinMutation = useMutation({ mutationFn: (lecture: StudentLecture) => joinStudentLecture(lecture.id), onSuccess: (data, lecture) => { setActiveLecture(lecture.id); queryClient.invalidateQueries({ queryKey: ['student-course', selectedId] }); queryClient.invalidateQueries({ queryKey: ['student-courses'] }); if (data.meeting_url) window.open(data.meeting_url, '_blank', 'noopener,noreferrer') } })

  useEffect(() => {
    if (!activeLecture) return
    const timer = window.setInterval(() => { heartbeatStudentLecture(activeLecture).catch(() => undefined) }, 30000)
    return () => { window.clearInterval(timer); leaveStudentLecture(activeLecture).catch(() => undefined) }
  }, [activeLecture])

  if (coursesQuery.isLoading) return <div className="py-20 text-center text-ink-400">جاري تحميل كورساتك...</div>
  if (coursesQuery.isError) return <div className="py-20 text-center text-rose-600">تعذر تحميل كورساتك</div>
  if (detailQuery.isLoading) return <div className="py-20 text-center text-ink-400">جاري تحميل تفاصيل الكورس...</div>
  if (detailQuery.isError) return <div className="py-20 text-center text-rose-600">تعذر تحميل تفاصيل الكورس</div>

  const enrollments = coursesQuery.data ?? []
  const selected = detailQuery.data
  if (!selected) return <CourseList enrollments={enrollments} onSelect={setSelectedId} />

  const course = selected.course
  const upcomingWorkshops = (course.workshops ?? []).filter((workshop) => workshop.scheduled_at && new Date(workshop.scheduled_at) >= new Date()).sort((a, b) => new Date(a.scheduled_at as string).getTime() - new Date(b.scheduled_at as string).getTime())
  const liveLectures = (course.lectures ?? []).filter((lecture) => lecture.status !== 'cancelled')
  return <div className="space-y-6">
    <button type="button" onClick={() => { setSelectedId(null); queryClient.invalidateQueries({ queryKey: ['student-courses'] }) }} className="flex items-center gap-2 text-sm font-semibold text-ink-500 hover:text-academy-600"><ArrowRight size={16} /> العودة إلى كورساتي</button>
    <header className="flex flex-col gap-5 rounded-3xl border border-ink-200/60 bg-white p-6 shadow-sm md:flex-row md:items-center">
      {course.thumbnail_url ? <img src={course.thumbnail_url} alt="" className="h-32 w-full rounded-2xl object-cover md:w-52" /> : <div className="flex h-32 w-full items-center justify-center rounded-2xl bg-academy-50 text-academy-500 md:w-52"><BookOpen size={34} /></div>}
      <div className="flex-1"><p className="text-sm font-semibold text-academy-600">كورس مسجل</p><h1 className="mt-1 text-2xl font-bold text-ink-900">{course.title}</h1><p className="mt-2 text-sm text-ink-500">{course.description || 'تابع تقدمك ومواعيدك التعليمية من هنا.'}</p>{course.instructor && <p className="mt-3 text-xs text-ink-400">المدرس: {course.instructor.name}</p>}</div>
      <div className="min-w-44 rounded-2xl bg-ink-50 p-4"><div className="flex items-center justify-between text-sm"><span className="text-ink-500">نسبة الحضور</span><strong className="text-academy-700">{selected.attendance_percentage}%</strong></div><div className="mt-3 h-2 overflow-hidden rounded-full bg-ink-200"><div className="h-full rounded-full bg-academy-600 transition-all" style={{ width: `${selected.attendance_percentage}%` }} /></div></div>
    </header>
    <section className="grid gap-5 xl:grid-cols-2">
      <ContentSection title="المحاضرات التزامنية" icon={<Video size={20} />}>
        {liveLectures.map((lecture) => <LectureCard key={lecture.id} lecture={lecture} active={activeLecture === lecture.id} onJoin={() => joinMutation.mutate(lecture)} pending={joinMutation.isPending} />)}
        {liveLectures.length === 0 && <Empty text="لا توجد محاضرات مجدولة لهذا الكورس." />}
      </ContentSection>
      <ContentSection title="الورش القادمة" icon={<CalendarClock size={20} />}>
        {upcomingWorkshops.map((workshop) => <div key={workshop.id} className="rounded-2xl border border-ink-100 bg-ink-50/60 p-4"><div className="flex items-start justify-between gap-3"><div><h3 className="font-semibold text-ink-900">{workshop.title}</h3><p className="mt-1 text-sm text-ink-500">{workshop.description || 'ورشة تعليمية قادمة'}</p></div><Clock3 size={18} className="text-academy-600" /></div><p className="mt-3 text-xs text-ink-500">{dateText(workshop.scheduled_at)} {workshop.duration_minutes ? `، ${workshop.duration_minutes} دقيقة` : ''}</p></div>)}
        {upcomingWorkshops.length === 0 && <Empty text="لا توجد ورش قادمة حاليًا." />}
      </ContentSection>
    </section>
    <ContentSection title="الدروس المسجلة" icon={<PlayCircle size={20} />}>
      <div className="grid gap-3 md:grid-cols-2">{(course.lessons ?? []).map((lesson) => <div key={lesson.id} className="flex items-center gap-3 rounded-2xl border border-ink-100 bg-ink-50/60 p-4"><CheckCircle2 size={19} className="shrink-0 text-emerald-600" /><div className="min-w-0 flex-1"><h3 className="truncate font-semibold text-ink-900">{lesson.title}</h3><p className="mt-1 truncate text-xs text-ink-500">{lesson.description || 'درس مسجل'}</p></div>{lesson.video_url && <a href={lesson.video_url} target="_blank" rel="noreferrer" aria-label="مشاهدة الدرس" className="text-academy-600"><ExternalLink size={17} /></a>}</div>)}</div>{(course.lessons ?? []).length === 0 && <Empty text="لا توجد دروس منشورة بعد." />}
    </ContentSection>
  </div>
}

function CourseList({ enrollments, onSelect }: { enrollments: StudentEnrollment[]; onSelect: (id: number) => void }) {
  return <div className="space-y-6"><header><p className="text-sm font-semibold text-academy-600">لوحة الطالب</p><h1 className="mt-2 text-3xl font-bold text-ink-900">كورساتي</h1><p className="mt-2 text-sm text-ink-500">تابع كورساتك، حضورك، محاضراتك التزامنية والورش القادمة.</p></header><div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{enrollments.map((enrollment) => <button type="button" key={enrollment.enrollment_id} onClick={() => onSelect(enrollment.course.id)} className="overflow-hidden rounded-3xl border border-ink-200/60 bg-white text-right shadow-sm transition hover:-translate-y-1 hover:shadow-xl">{enrollment.course.thumbnail_url ? <img src={enrollment.course.thumbnail_url} alt="" className="h-44 w-full object-cover" /> : <div className="flex h-44 items-center justify-center bg-academy-50 text-academy-500"><BookOpen size={42} /></div>}<div className="p-5"><h2 className="truncate text-lg font-bold text-ink-900">{enrollment.course.title}</h2><p className="mt-2 line-clamp-2 text-sm text-ink-500">{enrollment.course.description || 'لا يوجد وصف للكورس'}</p><div className="mt-5 border-t border-ink-100 pt-4"><div className="flex justify-between text-xs text-ink-500"><span>الحضور</span><strong className="text-academy-700">{enrollment.attendance_percentage}%</strong></div><div className="mt-2 h-2 overflow-hidden rounded-full bg-ink-200"><div className="h-full rounded-full bg-academy-600" style={{ width: `${enrollment.attendance_percentage}%` }} /></div></div></div></button>)}{enrollments.length === 0 && <Empty text="لم يتم تسجيلك في أي كورس بعد." />}</div></div>
}

function ContentSection({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) { return <section className="rounded-3xl border border-ink-200/60 bg-white p-5 shadow-sm"><div className="mb-4 flex items-center gap-2"><span className="text-academy-600">{icon}</span><h2 className="text-lg font-bold text-ink-900">{title}</h2></div><div className="space-y-3">{children}</div></section> }
function LectureCard({ lecture, active, onJoin, pending }: { lecture: StudentLecture; active: boolean; onJoin: () => void; pending: boolean }) { return <div className="rounded-2xl border border-ink-100 bg-ink-50/60 p-4"><div className="flex items-start justify-between gap-3"><div><h3 className="font-semibold text-ink-900">{lecture.title}</h3><p className="mt-1 text-xs text-ink-500">{dateText(lecture.scheduled_at)} {lecture.duration_minutes ? `، ${lecture.duration_minutes} دقيقة` : ''}</p></div><span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${lecture.attended ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-100 text-blue-700'}`}>{lecture.attended ? 'تم الحضور' : lecture.status === 'completed' ? 'انتهت' : 'قادمة'}</span></div>{lecture.description && <p className="mt-2 text-sm text-ink-500">{lecture.description}</p>}<div className="mt-4 flex gap-2">{lecture.meeting_url && lecture.status !== 'completed' && <button type="button" onClick={onJoin} disabled={pending} className="flex items-center gap-2 rounded-xl bg-academy-600 px-4 py-2.5 text-xs font-semibold text-white disabled:opacity-50"><Video size={15} /> {active ? 'تم تسجيل الدخول' : 'دخول المحاضرة'}</button>}{lecture.recording_url && <a href={lecture.recording_url} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-xl border border-ink-200 px-4 py-2.5 text-xs font-semibold text-ink-600"><ExternalLink size={15} /> التسجيل</a>}</div></div> }
function Empty({ text }: { text: string }) { return <p className="rounded-2xl border border-dashed border-ink-200 bg-ink-50 p-8 text-center text-sm text-ink-400">{text}</p> }

<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Course;
use App\Models\CourseEnrollment;
use App\Models\CourseLecture;
use App\Models\CourseLectureAttendance;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;

class StudentCoursesController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $enrollments = CourseEnrollment::query()
            ->where('student_id', $request->user()->id)
            ->whereIn('status', ['active', 'completed'])
            ->with(['course.category', 'course.instructor', 'course.lectures', 'course.workshops'])
            ->latest('enrolled_at')
            ->get();

        $data = $enrollments->map(fn (CourseEnrollment $enrollment): array => [
            'enrollment_id' => $enrollment->id,
            'status' => $enrollment->status,
            'enrolled_at' => $enrollment->enrolled_at?->toIso8601String(),
            'attendance_percentage' => $enrollment->attendancePercentage(),
            'course' => $this->courseData($enrollment->course),
        ]);

        return response()->json(['data' => $data]);
    }

    public function show(Request $request, Course $course): JsonResponse
    {
        $enrollment = $this->enrollment($request, $course);
        $course->load(['category', 'instructor', 'lessons', 'lectures', 'workshops']);

        return response()->json([
            'data' => [
                'enrollment_id' => $enrollment->id,
                'status' => $enrollment->status,
                'enrolled_at' => $enrollment->enrolled_at?->toIso8601String(),
                'attendance_percentage' => $enrollment->attendancePercentage(),
                'course' => $this->courseData($course, true, $request->user()->id),
            ],
        ]);
    }

    public function joinLecture(Request $request, CourseLecture $lecture): JsonResponse
    {
        $this->enrollment($request, $lecture->course);
        $attendance = CourseLectureAttendance::query()->firstOrCreate(
            ['lecture_id' => $lecture->id, 'student_id' => $request->user()->id],
            ['joined_at' => now(), 'last_seen_at' => now()],
        );
        if (!$attendance->joined_at) $attendance->update(['joined_at' => now()]);
        $attendance->update(['last_seen_at' => now(), 'left_at' => null]);

        return response()->json(['data' => ['meeting_url' => $lecture->meeting_url, 'attendance_id' => $attendance->id]]);
    }

    public function heartbeat(Request $request, CourseLecture $lecture): JsonResponse
    {
        $this->enrollment($request, $lecture->course);
        $attendance = CourseLectureAttendance::query()->where('lecture_id', $lecture->id)->where('student_id', $request->user()->id)->firstOrFail();
        $now = now();
        $lastSeen = $attendance->last_seen_at ?? $now;
        $elapsed = min(max($lastSeen->diffInSeconds($now), 0), 90);
        $attendance->update(['last_seen_at' => $now, 'attended_seconds' => $attendance->attended_seconds + $elapsed]);

        return response()->json(['data' => ['attended_seconds' => $attendance->fresh()->attended_seconds]]);
    }

    public function leaveLecture(Request $request, CourseLecture $lecture): JsonResponse
    {
        $this->enrollment($request, $lecture->course);
        $attendance = CourseLectureAttendance::query()->where('lecture_id', $lecture->id)->where('student_id', $request->user()->id)->first();
        if ($attendance) {
            $now = now();
            $elapsed = min(max(($attendance->last_seen_at ?? $now)->diffInSeconds($now), 0), 90);
            $attendance->update(['left_at' => $now, 'last_seen_at' => $now, 'attended_seconds' => $attendance->attended_seconds + $elapsed]);
        }
        return response()->json(['message' => 'تم تسجيل مغادرة المحاضرة.']);
    }

    private function enrollment(Request $request, Course $course): CourseEnrollment
    {
        return CourseEnrollment::query()->where('course_id', $course->id)->where('student_id', $request->user()->id)->whereIn('status', ['active', 'completed'])->firstOrFail();
    }

    private function courseData(Course $course, bool $details = false, ?int $studentId = null): array
    {
        $data = [
            'id' => $course->id,
            'title' => $course->title,
            'description' => $course->description,
            'thumbnail_url' => $course->thumbnail_url,
            'category' => $course->category ? ['id' => $course->category->id, 'name' => $course->category->name] : null,
            'instructor' => $course->instructor ? ['id' => $course->instructor->id, 'name' => $course->instructor->name, 'avatar_url' => $course->instructor->avatar_url] : null,
        ];
        if ($details) {
            $data['lessons'] = $course->lessons->where('is_published', true)->values();
            $data['lectures'] = $course->lectures->map(fn (CourseLecture $lecture): array => $this->lectureData($lecture, $studentId))->values();
            $data['workshops'] = $course->workshops->values();
        }
        return $data;
    }

    private function lectureData(CourseLecture $lecture, int $studentId): array
    {
        $attendance = $lecture->attendances()->where('student_id', $studentId)->first();
        return [
            'id' => $lecture->id,
            'title' => $lecture->title,
            'description' => $lecture->description,
            'meeting_url' => $lecture->meeting_url,
            'recording_url' => $lecture->recording_url,
            'scheduled_at' => $lecture->scheduled_at?->toIso8601String(),
            'duration_minutes' => $lecture->duration_minutes,
            'status' => $lecture->status,
            'attended_seconds' => $attendance?->attended_seconds ?? 0,
            'attended' => $attendance?->joined_at !== null,
        ];
    }
}

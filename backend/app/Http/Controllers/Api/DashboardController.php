<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Course;
use App\Models\CourseEnrollment;
use App\Models\CourseLecture;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function stats(Request $request): JsonResponse
    {
        $user = $request->user();

        if ($user->hasRole('Admin')) {
            return response()->json(['data' => [
                'role' => 'admin',
                'stats' => [
                    ['key' => 'courses', 'label' => 'إجمالي الكورسات', 'value' => Course::count(), 'description' => Course::where('status', 'published')->count().' منشور'],
                    ['key' => 'students', 'label' => 'الطلاب', 'value' => User::role('Student')->where('status', 'active')->count(), 'description' => 'حساب نشط'],
                    ['key' => 'teachers', 'label' => 'المدرسون', 'value' => User::role('Teacher')->where('status', 'active')->count(), 'description' => 'حساب نشط'],
                    ['key' => 'enrollments', 'label' => 'التسجيلات', 'value' => CourseEnrollment::whereIn('status', ['active', 'completed'])->count(), 'description' => 'تسجيل فعال أو مكتمل'],
                ],
            ]]);
        }

        if ($user->hasRole('Teacher')) {
            $courseIds = Course::where('instructor_id', $user->id)->pluck('id');

            return response()->json(['data' => [
                'role' => 'teacher',
                'stats' => [
                    ['key' => 'courses', 'label' => 'كورساتي', 'value' => $courseIds->count(), 'description' => Course::whereIn('id', $courseIds)->where('status', 'published')->count().' منشور'],
                    ['key' => 'students', 'label' => 'الطلاب', 'value' => CourseEnrollment::whereIn('course_id', $courseIds)->whereIn('status', ['active', 'completed'])->distinct('student_id')->count('student_id'), 'description' => 'طالب في كورساتك'],
                    ['key' => 'upcoming', 'label' => 'المحاضرات القادمة', 'value' => CourseLecture::whereIn('course_id', $courseIds)->whereIn('status', ['scheduled', 'live'])->where('scheduled_at', '>=', now())->count(), 'description' => 'محاضرة مجدولة'],
                    ['key' => 'enrollments', 'label' => 'التسجيلات', 'value' => CourseEnrollment::whereIn('course_id', $courseIds)->whereIn('status', ['active', 'completed'])->count(), 'description' => 'تسجيل فعال أو مكتمل'],
                ],
            ]]);
        }

        $enrollments = CourseEnrollment::where('student_id', $user->id)->whereIn('status', ['active', 'completed']);

        return response()->json(['data' => [
            'role' => 'student',
            'stats' => [
                ['key' => 'courses', 'label' => 'كورساتي', 'value' => (clone $enrollments)->count(), 'description' => 'كورس مسجل'],
                ['key' => 'active', 'label' => 'كورسات نشطة', 'value' => (clone $enrollments)->where('status', 'active')->count(), 'description' => 'قيد التعلم'],
                ['key' => 'completed', 'label' => 'كورسات مكتملة', 'value' => (clone $enrollments)->where('status', 'completed')->count(), 'description' => 'تم إتمامها'],
                ['key' => 'progress', 'label' => 'متوسط الإنجاز', 'value' => round((float) ((clone $enrollments)->avg('completion_percentage') ?? 0)).'%', 'description' => 'نسبة التقدم في الكورسات'],
            ],
        ]]);
    }
}
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CourseEnrollment extends Model
{
    public $timestamps = false;

    protected $fillable = ['student_id', 'course_id', 'enrolled_at', 'completion_percentage', 'status', 'certificate_issued_at'];

    protected $casts = ['enrolled_at' => 'datetime', 'certificate_issued_at' => 'datetime'];

    public function course(): BelongsTo { return $this->belongsTo(Course::class); }
    public function student(): BelongsTo { return $this->belongsTo(User::class, 'student_id'); }

    public function attendancePercentage(): int
    {
        $lectures = $this->course->lectures()
            ->where(function ($query): void {
                $query->where('scheduled_at', '<=', now())
                    ->orWhereHas('attendances', fn ($attendance) => $attendance->where('student_id', $this->student_id));
            })
            ->get();
        if ($lectures->isEmpty()) return 0;
        $attended = $lectures->filter(function ($lecture): bool {
            $attendance = $lecture->attendances()->where('student_id', $this->student_id)->first();
            if (!$attendance) return false;
            return $attendance->joined_at !== null;
        })->count();
        return (int) round(($attended / $lectures->count()) * 100);
    }
}
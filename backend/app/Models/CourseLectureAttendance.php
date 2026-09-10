<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CourseLectureAttendance extends Model
{
    protected $fillable = ['lecture_id', 'student_id', 'joined_at', 'last_seen_at', 'left_at', 'attended_seconds'];
    protected $casts = ['joined_at' => 'datetime', 'last_seen_at' => 'datetime', 'left_at' => 'datetime', 'attended_seconds' => 'integer'];

    public function lecture(): BelongsTo { return $this->belongsTo(CourseLecture::class, 'lecture_id'); }
    public function student(): BelongsTo { return $this->belongsTo(User::class, 'student_id'); }
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('course_lecture_attendances', function (Blueprint $table): void {
            $table->id();
            $table->foreignId('lecture_id')->constrained('course_lectures')->cascadeOnDelete();
            $table->foreignId('student_id')->constrained('users')->cascadeOnDelete();
            $table->timestamp('joined_at')->nullable();
            $table->timestamp('last_seen_at')->nullable();
            $table->timestamp('left_at')->nullable();
            $table->unsignedInteger('attended_seconds')->default(0);
            $table->timestamps();
            $table->unique(['lecture_id', 'student_id']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('course_lecture_attendances');
    }
};

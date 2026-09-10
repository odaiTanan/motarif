<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('event_reminders', function (Blueprint $table): void {
            $table->id();
            $table->string('event_type', 30);
            $table->unsignedBigInteger('event_id');
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->timestamp('sent_at');
            $table->timestamps();
            $table->unique(['event_type', 'event_id', 'user_id']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('event_reminders');
    }
};

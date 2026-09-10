<?php

namespace App\Console\Commands;

use App\Models\CourseLecture;
use App\Models\CourseWorkshop;
use App\Models\User;
use App\Notifications\UpcomingEventReminder;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class SendUpcomingEventReminders extends Command
{
    protected $signature = 'events:send-reminders {--now : Include events within the next hour for manual testing}';
    protected $description = 'Send email reminders one hour before lectures and workshops';

    public function handle(): int
    {
        $from = now()->addMinutes($this->option('now') ? 0 : 55);
        $until = now()->addMinutes(65);
        $sent = 0;

        CourseLecture::query()->with(['course.instructor', 'course.enrollments.student'])
            ->whereNotNull('scheduled_at')->whereBetween('scheduled_at', [$from, $until])
            ->where('status', '!=', 'cancelled')->each(function (CourseLecture $lecture) use (&$sent): void {
                $recipients = $lecture->course->enrollments->whereIn('status', ['active', 'completed'])->pluck('student')->push($lecture->course->instructor)->filter()->unique('id');
                $sent += $this->notifyRecipients($recipients, 'lecture', $lecture->id, $lecture->title, $lecture->course->title, $lecture->scheduled_at->toIso8601String(), $lecture->meeting_url);
            });

        CourseWorkshop::query()->with(['course.instructor', 'course.enrollments.student'])
            ->whereNotNull('scheduled_at')->whereBetween('scheduled_at', [$from, $until])->each(function (CourseWorkshop $workshop) use (&$sent): void {
                $recipients = $workshop->course->enrollments->whereIn('status', ['active', 'completed'])->pluck('student')->push($workshop->course->instructor)->filter()->unique('id');
                $sent += $this->notifyRecipients($recipients, 'workshop', $workshop->id, $workshop->title, $workshop->course->title, $workshop->scheduled_at->toIso8601String());
            });

        $this->info("Queued {$sent} reminder notification(s).");
        return self::SUCCESS;
    }

    private function notifyRecipients($recipients, string $eventType, int $eventId, string $eventTitle, string $courseTitle, string $scheduledAt, ?string $meetingUrl = null): int
    {
        $count = 0;
        foreach ($recipients as $recipient) {
            $created = DB::table('event_reminders')->insertOrIgnore([
                'event_type' => $eventType,
                'event_id' => $eventId,
                'user_id' => $recipient->id,
                'sent_at' => now(),
                'created_at' => now(),
                'updated_at' => now(),
            ]);
            if (!$created) continue;
            $recipient->notify(new UpcomingEventReminder($eventType, $eventTitle, $courseTitle, $scheduledAt, $meetingUrl));
            $count++;
        }
        return $count;
    }
}

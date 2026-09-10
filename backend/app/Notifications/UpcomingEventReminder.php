<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class UpcomingEventReminder extends Notification implements ShouldQueue
{
    use Queueable;

    public function __construct(
        private readonly string $eventType,
        private readonly string $eventTitle,
        private readonly string $courseTitle,
        private readonly string $scheduledAt,
        private readonly ?string $meetingUrl = null,
    ) {}

    public function via(object $notifiable): array
    {
        return ['mail'];
    }

    public function toMail(object $notifiable): MailMessage
    {
        $label = $this->eventType === 'lecture' ? 'محاضرة تزامنية' : 'ورشة';
        $mail = (new MailMessage)
            ->subject("تذكير: {$label} بعد ساعة")
            ->greeting("مرحبًا {$notifiable->name}")
            ->line("لديك {$label} قادمة بعد ساعة تقريبًا.")
            ->line("العنوان: {$this->eventTitle}")
            ->line("الكورس: {$this->courseTitle}")
            ->line("الموعد: {$this->scheduledAt}");

        if ($this->meetingUrl) {
            $mail->action('دخول Google Meet', $this->meetingUrl);
        }

        return $mail->line('نتمنى لك تجربة تعليمية موفقة.');
    }
}

<?php

/*
 * This file is part of fof/best-answer.
 *
 * Copyright (c) FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace FoF\BestAnswer\Listeners;

use FoF\BestAnswer\Events\BestAnswerSet;
use FoF\BestAnswer\Jobs;

class QueueNotificationJobs
{
    public function handle(BestAnswerSet $event)
    {
        resolve('flarum.queue.connection')->push(
            new Jobs\SendNotificationWhenBestAnswerSetInDiscussion($event->discussion, $event->actor)
        );
    }
}

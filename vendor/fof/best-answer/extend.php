<?php

/*
 * This file is part of fof/best-answer.
 *
 * Copyright (c) FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace FoF\BestAnswer;

use Carbon\Carbon;
use DateTime;
use Flarum\Api\Controller\ListPostsController;
use Flarum\Api\Controller\ShowDiscussionController;
use Flarum\Api\Serializer\BasicDiscussionSerializer;
use Flarum\Api\Serializer\BasicPostSerializer;
use Flarum\Api\Serializer\BasicUserSerializer;
use Flarum\Api\Serializer\DiscussionSerializer;
use Flarum\Database\AbstractModel;
use Flarum\Discussion\Discussion;
use Flarum\Discussion\Event\Saving;
use Flarum\Discussion\Search\DiscussionSearcher;
use Flarum\Extend;
use Flarum\Post\Post;
use Flarum\User\User;
use FoF\BestAnswer\Events\BestAnswerSet;
use FoF\Components\Extend\AddFofComponents;

return [
    (new AddFofComponents()),

    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/resources/less/forum.less'),

    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/resources/less/admin.less'),

    new Extend\Locales(__DIR__.'/resources/locale'),

    new DefaultSettings(),

    (new Extend\Model(Discussion::class))
        ->belongsTo('bestAnswerPost', Post::class, 'best_answer_post_id')
        ->belongsTo('bestAnswerUser', User::class, 'best_answer_user_id'),

    (new Extend\View())
        ->namespace('fof-best-answer', __DIR__.'/resources/views'),

    (new Extend\Event())
        ->listen(Saving::class, Listeners\SelectBestAnswer::class)
        ->listen(BestAnswerSet::class, Listeners\QueueNotificationJobs::class),

    (new Extend\Notification())
        ->type(Notification\SelectBestAnswerBlueprint::class, BasicDiscussionSerializer::class, ['alert', 'email'])
        ->type(Notification\AwardedBestAnswerBlueprint::class, BasicDiscussionSerializer::class, ['alert'])
        ->type(Notification\BestAnswerSetInDiscussionBlueprint::class, BasicDiscussionSerializer::class, []),

    (new Extend\ApiSerializer(DiscussionSerializer::class))
        ->attribute('canSelectBestAnswer', function (DiscussionSerializer $serializer, AbstractModel $discussion) {
            return Helpers::canSelectBestAnswer($serializer->getActor(), $discussion);
        }),

    (new Extend\ApiSerializer(BasicDiscussionSerializer::class))
        ->hasOne('bestAnswerPost', BasicPostSerializer::class)
        ->hasOne('bestAnswerUser', BasicUserSerializer::class)
        ->attribute('hasBestAnswer', function (BasicDiscussionSerializer $serializer, AbstractModel $discussion) {
            return $discussion->bestAnswerPost ? $discussion->bestAnswerPost->id : false;
        })
        ->attribute('bestAnswerSetAt', function (BasicDiscussionSerializer $serializer, AbstractModel $discussion) {
            if ($discussion->best_answer_set_at) {
                return Carbon::createFromTimeString($discussion->best_answer_set_at)->format(DateTime::RFC3339);
            }

            return null;
        }),

    (new Extend\Settings())
        ->serializeToForum('canSelectBestAnswerOwnPost', 'fof-best-answer.allow_select_own_post', 'boolVal')
        ->serializeToForum('useAlternativeBestAnswerUi', 'fof-best-answer.use_alternative_ui', 'boolVal'),

    (new Extend\ApiController(ShowDiscussionController::class))
        ->addInclude(['bestAnswerPost', 'bestAnswerUser'])
        ->load(['bestAnswerPost.user']),

    (new Extend\ApiController(ListPostsController::class))
        ->addInclude(['discussion.bestAnswerPost', 'discussion.bestAnswerUser', 'discussion.bestAnswerPost.user']),

    (new Extend\SimpleFlarumSearch(DiscussionSearcher::class))
        ->addGambit(Gambit\IsSolvedGambit::class),

    (new Extend\Console())
        ->command(Console\NotifyCommand::class)
        ->schedule(Console\NotifyCommand::class, new Console\NotifySchedule()),
];

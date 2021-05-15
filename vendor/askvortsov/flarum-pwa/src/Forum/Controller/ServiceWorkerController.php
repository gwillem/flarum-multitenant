<?php

/*
 * This file is part of askvortsov/flarum-pwa
 *
 *  Copyright (c) 2021 Alexander Skvortsov.
 *
 *  For detailed copyright and license information, please view the
 *  LICENSE file that was distributed with this source code.
 */

namespace Askvortsov\FlarumPWA\Forum\Controller;

use Askvortsov\FlarumPWA\PWATrait;
use Flarum\Foundation\Application;
use Flarum\Foundation\Paths;
use Flarum\Settings\SettingsRepositoryInterface;
use Laminas\Diactoros\Response\TextResponse;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;

class ServiceWorkerController implements RequestHandlerInterface
{
    use PWATrait;

    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    /**
     * @var Application
     */
    protected $app;

    /**
     * @var Paths
     */
    protected $paths;

    /**
     * @param SettingsRepositoryInterface $settings
     */
    public function __construct(SettingsRepositoryInterface $settings, Application $app, Paths $paths)
    {
        $this->settings = $settings;
        $this->app = $app;
        $this->paths = $paths;
    }

    /**
     * {@inheritdoc}
     */
    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $response = new TextResponse($this->mount()->read('ext://sw.js'), 200, ['content-type' => 'text/javascript; charset=utf-8']);

        return $response;
    }
}
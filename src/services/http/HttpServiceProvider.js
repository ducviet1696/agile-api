import ServiceProvider from '../ultils/ServiceProvider';
import { container }   from '@fusion.io/container';

import Koa     from 'koa';
import Router  from 'koa-router';
import cors    from '@koa/cors';
import koaBody from 'koa-body';

export default class HttpServiceProvider extends ServiceProvider {

    register() {
        const config = container.make('config');
        container.singleton('http', () => new Koa());
        container.singleton('router', () => new Router(config.api.v1));
    }

    boot() {
        const koa    = container.make('http');
        const router = container.make('router');

        koa.use(koaBody({
            multipart: true,
        }));
        koa.use(cors());
        koa.use(router.allowedMethods());
        koa.use(router.routes());
    }
}
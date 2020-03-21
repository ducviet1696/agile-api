import ServiceProvider from '../ultils/ServiceProvider';
import { container }   from '@fusion.io/container';

import Koa     from 'koa';
import Router  from 'koa-router';
import cors    from '@koa/cors';
import koaBody from 'koa-body';

export default class HttpServiceProvider extends ServiceProvider {

    register() {
        container.singleton('http', () => new Koa());
        container.singleton('router', () => new Router());
    }

    boot() {
        const koa = container.make('http');

        koa.use(koaBody({
            multipart: true,
        }));
        koa.use(cors());
    }
}
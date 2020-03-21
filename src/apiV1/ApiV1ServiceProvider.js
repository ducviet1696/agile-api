import ServiceProvider from '../services/ultils/ServiceProvider';
import { container }   from '@fusion.io/container';

import APIRouter from './routes';

export default class ApiV1ServiceProvider extends ServiceProvider {

    boot() {
        const router = container.make('router');
        APIRouter(router)
    }
}
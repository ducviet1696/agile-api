import ServiceProvider from '../ultils/ServiceProvider';
import { container }   from '@fusion.io/container';
import winston         from 'winston';

export default class LoggerServiceProvider extends ServiceProvider {

    register() {
        container.singleton('logger', () => {
            const { logger } = container.make('config');
            return new winston.createLogger(logger);
        });
    }
}

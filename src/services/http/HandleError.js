import { container } from '@fusion.io/container';
import { Message }   from './message';

export default async (context, next) => {
    const { debug } = container.make('config');

    try {
        await next();
        if (context.body instanceof Message) {
            context.status = context.body.status;
            context.body   = context.body.message;
        }
    } catch (error) {
        const logger = container.make('logger');

        logger.error(error.message, { stack: error.stack });

        if (!debug) {
            throw error;
        }

        const Youch = require('youch');
        const youch = new Youch(error, context.request);

        const accepts = context.accepts('json', 'html');

        switch (accepts) {

            case 'json':
                context.body = await youch.toJSON();
                break;
            case 'html':
                context.body = await youch.toHTML();
                break;
            default:
                context.body = await error.message;
        }

        context.status = 500;
    }
}

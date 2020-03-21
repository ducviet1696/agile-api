import { container }  from '@fusion.io/container';
import { BadRequest } from '../http/message';

export default (dataExtractor, schema) => (context, next) => {

    const requestPayload = dataExtractor(context.request);

    const ajv   = container.make('ajv');
    const valid = ajv.validate(schema, requestPayload);
    if (valid) {
        return next();
    }

    return context.body = new BadRequest({
        reasons: ajv.errors,
    });
};

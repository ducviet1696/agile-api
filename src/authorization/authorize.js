import { container } from '@fusion.io/container';

import jsonwebtoken     from 'jsonwebtoken';
import { UnAuthorized } from '../services/http/message';

export default (roles = []) => (context, next) => {

    const { jwt } = container.make('config');
    const token   = resolveToken(context);

    try {
        context.user = jsonwebtoken.verify(token, jwt.privateKey);
    } catch (e) {
        if (e.name === 'JsonWebTokenError' || e.name === 'TokenExpiredError') {
            context.body = new UnAuthorized({ message: 'Invalid token, you must login to use service' });
            return;
        }
        throw e;
    }

    if (typeof roles === 'string') {
        roles = [roles];
    }

    if (roles.length && !roles.includes(context.user.role)) {
        context.body = new UnAuthorized({ message: 'No Permission to Access' });
    }

    return next();
};

function resolveToken(context) {

    return (
        context.request.body[ 'token' ] ||
        context.params.token ||
        context.request.query.token ||
        context.request.header[ 'authorization' ] || ''
    );
}
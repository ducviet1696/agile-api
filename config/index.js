module.exports = {
    env      : process.env.NODE_ENV || 'develop',
    port     : process.env.PORT || 8080,
    debug    : process.env.NODE_ENV !== 'production',
    api      : {
        v1: {
            prefix: '/v1',
        },
    },
    providers: [
        'services/http/HttpServiceProvider',
        'services/logger/LoggerServiceProvider',
        'services/validation/AjvServiceProvider',
        'services/database/DatabaseServiceProvider',

        'apiV1/ApiV1ServiceProvider',
        'agile/AgileServiceProvider',
        'agile/auth/AuthServiceProvider',
    ],
    roles    : {},
    logger   : require('./logger'),
    database : require('./database'),
    validate : {
        schemas: {},
    },
    jwt      : {
        privateKey: process.env.AUTH_PRIVATE_KEY || '3fA5WPyDZ051',
        options   : { expiresIn: process.env.AUTH_EXPIRED_DATE || 36000 },
        salt      : 10,
    },
};
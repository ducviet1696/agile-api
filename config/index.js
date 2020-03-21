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

        'apiV1/ApiV1ServiceProvider',
    ],
    roles    : {},
    logger   : require('./logger'),
    validate : {
        schemas: {},
    },
};
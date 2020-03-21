module.exports = {
    env  : process.env.NODE_ENV || 'develop',
    port : process.env.PORT || 8080,
    debug: process.env.NODE_ENV !== 'production',
    providers: []
};
const { container } = require('@fusion.io/container');

module.exports = config => {

    container.value('config', config);
    const servicePrefix = (config.env !== 'production') ? './src' : './build';

    if (config.env !== 'production') {
        require('@babel/register');
    }

    config.providers.map(providerPath => {
        const Provider = require(servicePrefix + '/' + providerPath).default;
        const provider = new Provider();

        provider.register();
        return provider;
    }).forEach(provider => {
        provider.boot();
    });
    return container;
};
const { container } = require('@fusion.io/container');

module.exports = config => {

    container.value('config', config);
    const servicePrefix = (config.env !== 'production') ? './src' : './build';

    if (config.env !== 'production') {
        require('@babel/register');
    }

    config.providers.map(providerPath => {

        // Initialize service providers
        const Provider = require(servicePrefix + '/' + providerPath).default;
        const provider = new Provider();

        // Calling register
        provider.register();

        return provider;
    }).forEach(provider => {

        // Booting the services
        provider.boot();
    });

    return container;
};
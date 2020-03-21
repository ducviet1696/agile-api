require('dotenv').config();

const config    = require('./config');
const bootstrap = require('./bootstrap');
const chalk     = require('chalk');

const container = bootstrap(config);
const kernel    = container.make('http');
const router    = container.make('router');

kernel.use(router.routes());
kernel.use(router.allowedMethods());

console.log(chalk`🌏 {gray Server environment {cyan ${config.env}}}`);
console.log(chalk`🔭 {gray Debugging mode is {cyan ${config.debug}}}`);

kernel.listen(config.port, () => {
    console.log(chalk`🚀 {gray Server started at {cyan ${config.port}}}`);
});
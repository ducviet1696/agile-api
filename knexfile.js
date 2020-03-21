// Update with your config settings.
require('dotenv').config();
const config = require('./config');

module.exports = {

    ...config.database

};

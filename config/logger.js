const winston = require('winston');
const path    = require('path');

module.exports = {
    level      : 'info',
    format     : winston.format.json(),
    defaultMeta: { service: 'agile' },
    transports : [
        new winston.transports.File({
            filename: path.join(__dirname, '../logs/error.log'),
            level   : 'error',
        }),
        new winston.transports.File({
            filename: path.join(__dirname, '../logs/combined.log'),
        }),
    ],
};

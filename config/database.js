const path = require('path');

module.exports = {
    client    : 'mysql',
    connection: {
        port    : process.env.MYSQL_PORT,
        host    : process.env.MYSQL_END_POINT,
        user    : process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
    },
    seeds     : {
        directory: path.join(__dirname, '../seeds'),
    },
};
const {Sequelize} = require('sequelize');
const DEVELOPMENT = "DEVELOPMENT";
const RELEASE = "RELEASE";
const Mode = RELEASE;
const DB_OPTION = {
    //host: 'localhost',
    /* host:"192.168.10.232",*/
    database: "qs",
    username: "root",
    password: '7898ikuojl',
    port: 3306
}
let sequelize;
if (1) {
    sequelize = new Sequelize({
        host: "localhost",
        dialect: 'mysql',
        database: "bi",
        username: "root",
        password: '7898ikuojl',
        timezone: "+08:00",
        pool: {
            max: 4,
            min: 0,
            acquire: '30000',
            idle: '10000'
        },
        logging: 0 && console.log
    })
}

module.exports = {
    sequelize,
    Mode,
    DEVELOPMENT,
    RELEASE,
    DB_OPTION
}

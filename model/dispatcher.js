const Sequelize = require('sequelize');
const {Model, INTEGER, STRING, JSON, DATE, FLOAT} = Sequelize;
const {sequelize} = require('./com');

class Dispatcher extends Model {
}

Dispatcher.init({
    id: {
        primaryKey: true,
        type: INTEGER,
        autoIncrement: true
    },
    name: STRING,
    code: STRING,
    passwd: STRING
}, {modelName: "dispatcher", sequelize})
module.exports = {Dispatcher}

const Sequelize = require('sequelize');
const {Model, INTEGER, STRING, JSON, DATE} = Sequelize;
const {sequelize} = require('./com');

class Department extends Model {

}

Department.init({
    id: {
        type: INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: STRING
    }
}, {sequelize, modelName: "department"})
module.exports = {Department}

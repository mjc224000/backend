const Sequelize = require('sequelize');
const {Model, INTEGER, STRING, DATE, JSON: _JSON} = Sequelize;
const {sequelize} = require('./com');

class InitialData extends Model {

}

InitialData.init({
    id: {
        primaryKey: true,
        type: INTEGER,
        autoIncrement: true
    },
    year: {
        type: DATE
    },
    //各种累积量的初始值
    json_data: {
        type: JSON
    }

}, {sequelize, modelName: "initial_data", timestamps: true})
module.exports = {
    InitialData
}

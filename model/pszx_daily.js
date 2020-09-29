const Sequelize = require('sequelize');
const {Model, INTEGER, STRING, DATE, JSON: _JSON} = Sequelize;
const {sequelize} = require('./com');

class PSZXDaily extends Model {

}

PSZXDaily.init({
    id: {
        primaryKey: true,
        type: INTEGER,
        autoIncrement: true
    },
    record_date: {
        type: DATE,
        comment: "统计时间"
    },


}, {sequelize, modelName: "pszx_daily", timestamps: true})

module.exports = {
    PSZXDaily
}

const Sequelize = require('sequelize');
const {Model, INTEGER, STRING, JSON, DATE, FLOAT} = Sequelize;
const {sequelize} = require('./com')

class RZYDaily extends Model {

}

RZYDaily.init(
    {
        id: {
            primaryKey: true,
            type: INTEGER,
            autoIncrement: true
        }, job_date: {
            type: DATE,
            comment: "实际作业时间"
        },
        record_date: {
            type: DATE,
            comment: "统计时间"
        },
        overview: {
            type: JSON,
            comment: "生产情况"
        }


    }, {
        sequelize, tableName: "rzy_daily"
    }
)
module.exports = {RZYDaily}

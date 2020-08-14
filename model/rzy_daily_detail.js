const Sequelize = require('sequelize');
const {Model, INTEGER, STRING, JSON, DATE, FLOAT} = Sequelize;
const {sequelize} = require('./com')
const {RZYDaily} = require('./rzy_daily')

class RZYDailyDetail extends Model {

}

RZYDailyDetail.init(
    {
        id: {
            primaryKey: true,
            type: INTEGER,
            autoIncrement: true
        }, rzy_daily_id: {
            type: INTEGER,
            references: {model: RZYDaily, key: "id"},

        }
        ,
        region: {
            type: STRING,
            comment: "作业地区"
        },
        quantity: {
            type: FLOAT,
            comment: "作业量"
        },
        input: {
            type: FLOAT,
            comment: "入库量"
        },
        stock: {
            type: FLOAT,
            comment: "库存"
        },
        remain: {
            type: FLOAT,
            comment: "剩余"
        },
        output: {
            type: FLOAT,
            comment: "出库量"
        },
        outside: {
            type: FLOAT,
            comment: "外委作业量"
        }

    }, {sequelize, modelName: "rzy_daily_detail"}
)
module.exports = {
    RZYDailyDetail
}

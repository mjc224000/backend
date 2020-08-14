const Sequelize = require('sequelize');
const {Model, INTEGER, STRING, JSON, DATE, FLOAT} = Sequelize;

class PSZXDailyDetail extends Model {

}

PSZXDailyDetail.init(
    {
        id: {
            primaryKey: true,
            type: INTEGER,
            autoIncrement: true
        },
        region: {
            type: STRING,
            comment: "区域"
        },
        location: {
            type: FLOAT,
            comment: "站点"
        },
        type: {
            type: FLOAT,
            comment: "运送方式"
        },
        planed: {
            type: FLOAT,
            comment: "计划量"
        },
        remain: {
            type: FLOAT,
            comment: "剩余"
        },
        output:{
            type:FLOAT,
            comment:"出库量"
        },
        outside:{
            type:FLOAT,
            comment:"外委作业量"
        },
        actual_weight:{
            type:FLOAT,
            comment:"实际重量"
        },
        actual_car:{
            type:INTEGER,
            comment:"实装车数"
        },
        stock:{
            type:INTEGER,
            comment:"库存"
        },
        comment:{
            type:STRING,
            comment:"备注"
        }

    }
)

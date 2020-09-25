const Sequelize = require('sequelize');
const {Model, INTEGER, STRING, JSON, DATE, FLOAT} = Sequelize;
const {sequelize} = require('./com')

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
        }
        , planed_vehicles: {
            type: INTEGER,
            comment: "计划车辆"
        },
        remain: {
            type: FLOAT,
            comment: "剩余"
        }, remain_vehicles: {
            type: INTEGER,
            comment: "剩余车数"
        }
        ,
        actual_weight: {
            type: FLOAT,
            comment: "实际重量"
        },
        actual_car: {
            type: INTEGER,
            comment: "实装车数"
        },
        unfinished_vehicles: {
            type:INTEGER,
            comment:"未装车数"
        },
        stock: {
            type: INTEGER,
            comment: "库存"
        },
        month_acc:{
            type:INTEGER,
            comment:""
        },
        comment: {
            type: STRING,
            comment: "备注"
        }

    }, {
        sequelize,
        tableName: 'pszx_daily_detail'
    }
)
module.exports = {
    PSZXDailyDetail
}

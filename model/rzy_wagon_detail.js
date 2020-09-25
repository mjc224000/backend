const Sequelize = require('sequelize');
const {Model, INTEGER, STRING, JSON, DATE, FLOAT} = Sequelize;

class RZYWagonDetail extends Model {

}

RZYWagonDetail.init(
    {
        id: {
            primaryKey: true,
            type: INTEGER,
            autoIncrement: true
        },
        region: {
            type: STRING,
            comment: "作业地区"
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
        wagons: {
            type: INTEGER,
            comment: "车皮数"
        },
        month_wagons_acc:{
            type:INTEGER,
            comment:"月累车皮数（节）"
        },
        year_wagons_acc:{
            type:INTEGER,
            comment:"月累车皮数（节）"
        },
        month_job_acc:{
            type:INTEGER,
            comment:"年累计作业量(T)"
        },


    }
)
module.exports = {
    RZYDailyDetail
}

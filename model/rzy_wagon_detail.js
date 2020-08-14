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
        }

    }
)
module.exports = {
    RZYDailyDetail
}

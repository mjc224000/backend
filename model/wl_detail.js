const Sequelize = require('sequelize');
const {Model, INTEGER, STRING, JSON, DATE, FLOAT} = Sequelize;
const {sequelize} = require('./com');
const {WlDaily} = require('./wl_daily');
const {Department} = require('./department');

class WlDetail extends Model {

}

WlDetail.init(
    {
        id: {
            primaryKey: true,
            type: INTEGER,
            autoIncrement: true
        },
        wl_daily_id: {
            type: INTEGER,
            references: {
                model: WlDaily,
                key: "id"
            }
        },
        department_id: {
            type: INTEGER,
            references: {
                model: Department,
                key: "id"
            }
        }
        ,
        load_name: {
            type: STRING,
            comment: "货物名称"
        },
        origin: {
            type: STRING,
            comment: "装点"
        },
        dest: {
            type: STRING,
            comment: "卸点"
        },
        /**
         *  计划量，文字或数字
         */
        planed: STRING,
        /**
         * 实际装量 车
         * 如果是本部就会填写真实车数，填写外委就是没有真实车数。
         * params number|外委
         */
        actual: STRING,
        finished: STRING

    }, {sequelize, modelName: "wl_detail"})

module.exports = {
    WlDetail
}

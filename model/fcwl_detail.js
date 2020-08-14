const Sequelize = require('sequelize');
const {Model, INTEGER, STRING, DATE, JSON: _JSON, FLOAT} = Sequelize;
const {sequelize} = require('./com');
const {FcwlDaily} = require('./fcwl_daily')

class FcwlDetail extends Model {
}

FcwlDetail.init({
    id: {
        primaryKey: true,
        type: INTEGER,
        autoIncrement: true
    },
    fcwl_daily_id: {
        type: INTEGER,
        references: {
            model: FcwlDaily,
            key: "id"
        }
    }
    ,
    job_type: {
        type: STRING,
        comment: "作业类别"
    },
    load_name: {
        type: STRING,
        comment: "货物名称"
    },
    type: {
        type: STRING,
        comment: "类别 运输"
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
    planed: {
        type: STRING,
        comment: "计划量"
    },
    /**
     * 实际装量
     * 如果是本部就会填写真实车数，填写外委就是没有真实车数。
     * params number|外委
     */
    actual: {
        type: STRING,
        comment: "实际完成车数"
    },
    finished: {
        type: STRING,
        comment: "实际完成"
    },
})

/**
 * @description 中金车队日报主表
 * */
const Sequelize = require('sequelize');
const {Model, INTEGER, STRING, DATE, JSON} = Sequelize;
const {sequelize} = require('./com');

class ZjDaily extends Model {
}

ZjDaily.init({
    id: {
        primaryKey: true,
        type: INTEGER,
        autoIncrement: true
    },
    job_date: {
        type: DATE,
        comment: "实际作业时间"
    },
    record_date: {
        type: DATE,
        comment: "统计时间"
    },
    overview: {
        type: JSON,
        comment: "概览"
    }

})

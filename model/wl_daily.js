const Sequelize = require('sequelize');
const {Model, INTEGER, STRING, DATE, JSON} = Sequelize;
const {sequelize} = require('./com');

class WlDaily extends Model {

}

WlDaily.init({
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

}, {sequelize, modelName: "wl_daily", timestamps: true})

function insert() {
    WlDaily.create({
        duty: JSON.stringify({a: "nmsl", b: "wsnd"}),
    })
}

module.exports = {
    WlDaily,
    insert
}


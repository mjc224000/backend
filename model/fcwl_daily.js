const Sequelize = require('sequelize');
const {Model, INTEGER, STRING, DATE, JSON: _JSON} = Sequelize;
const {sequelize} = require('./com');

class FcwlDaily extends Model {
}

FcwlDaily.init({
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
        type: _JSON,
        comment: "概览"
    }

}, {
    sequelize,
    modelName: "fcwl_daily",
    timestamps: true
})

module.exports = {
    FcwlDaily
}

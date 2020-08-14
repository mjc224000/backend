const Sequelize = require('sequelize');
const {Model, INTEGER, STRING, DATE, JSON } = Sequelize;
const {sequelize} = require('./com');

class DockBulkCommodity extends Model {
}

DockBulkCommodity.init({
    id: {
        type: INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: STRING,
        comment: "货物名称"
    },
    origin: {
        type: STRING,
        comment: "启运地"
    },
    dest: {
        type: STRING,
        comment: "目的地"
    },
    planed: {
        type: INTEGER,
        comment: "计划量"
    },
    executor: {
        type: STRING,
        comment: "执行车队"
    }
})

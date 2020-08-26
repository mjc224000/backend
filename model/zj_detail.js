const Sequelize = require('sequelize');
const {Model, INTEGER, STRING, JSON, DATE, FLOAT} = Sequelize;
const {ZjDaily} = require('./zj_daily');

class ZjDetail extends Model {
}

ZjDetail.init({
    id: {
        primaryKey: true,
        type: INTEGER,
        autoIncrement: true
    },
    zj_daily_id: {
        type: INTEGER,
        references: {
            model: ZjDaily,
            key: "id"
        }
    },
    car_type:{
        type:STRING,
        comment:"车辆类型"
    },
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
    planed:{
        type:STRING,
        comment:"计划量"
    },
    cars:{
        type:INTEGER,
        comment:"实际完成车"
    }
})

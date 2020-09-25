const Sequelize = require('sequelize');
const {Dispatcher} = require("./dispatcher");
const {sequelize} = require("./com");
const {Model, INTEGER, STRING, JSON, DATE, FLOAT, TEXT} = Sequelize;
const {WlDaily} = require('./wl_daily');

class WlDailySpecialMachineryDetail extends Model {

}

ZjDailySpecialMachineryDetail.init({
    id: {type: INTEGER, primaryKey: true, autoIncrement: true},
    wl_daily_id: {
        type: INTEGER,
        references: {
            model: WlDaily,
            key: "id"
        }
    },
    name: {
        type: STRING,
        comment: "货物名称"
    }, application: {
        comment: "用途",
        type:STRING
    }
    ,
    types: {
        type:STRING,
        comment:"车辆类型"
    },
    shift:{
        type:INTEGER,
        comment:"台班"
    }
}, {
    modelName: "wl_dailySpecial_machinery_detail",
    sequelize
})
module.exports = {
    WlDailySpecialMachineryDetail
}

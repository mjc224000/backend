const Sequelize = require('sequelize');

const {sequelize} = require("./com");
const {Model, INTEGER, STRING, JSON, DATE, FLOAT, TEXT} = Sequelize;
const {WlDaily} = require('./wl_daily');

class WlDailySpecialMachineryDetail extends Model {

}

WlDailySpecialMachineryDetail.init({
    id: {type: INTEGER, primaryKey: true, autoIncrement: true},
    wl_daily_id: {
        type: INTEGER,
        references: {
            model: WlDaily,
            key: "id"
        }
    },
    types: STRING,
     num: INTEGER,
    disc: TEXT,

}, {
    modelName: "wl_dailySpecial_machinery_detail",
    sequelize
})
module.exports = {
    WlDailySpecialMachineryDetail
}

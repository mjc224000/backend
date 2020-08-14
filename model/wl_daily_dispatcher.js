const Sequelize = require('sequelize');
const {Dispatcher} = require("./dispatcher");
const {sequelize} = require("./com");
const {Model, INTEGER, STRING, JSON, DATE, FLOAT} = Sequelize;
const {WlDaily} = require('./wl_daily');
const {FcwlDaily} = require('./fcwl_daily');

class WlDailyDispatcher extends Model {

}

WlDailyDispatcher.init({
    id: {type: INTEGER, primaryKey: true, autoIncrement: true},
    wl_daily_id: {
        type: INTEGER,
        references: {
            model: WlDaily,
            key: "id"
        }
    }, fcg_wl_id: {
        type: INTEGER,
        references: {
            model: FcwlDaily,
            key: "id"
        }
    }
    ,
    dispatcher_id: {
        type: INTEGER,
        references: {
            model: Dispatcher,
            key: "id"
        }
    }
}, {
    modelName: "wl_daily_dispatcher",
    sequelize,
});
module.exports = {
    WlDailyDispatcher
}

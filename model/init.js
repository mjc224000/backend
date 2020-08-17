let {sequelize} = require('./com');
let {WlDetail} = require('./wl_detail');
let {WlDaily} = require('./wl_daily');
let {WlDailyDispatcher} = require("./wl_daily_dispatcher");
let {WlDailySpecialMachineryDetail} = require('./wl_daily_special_machinary_detail');
const {RZYDaily} = require('./rzy_daily');
const {RZYDailyDetail} = require('./rzy_daily_detail');
const {PSZXDaily} = require('./pszx_daily');
const {PSZXDailyDetail} = require('./pszx_daily_detail')
const {DockDaily} = require('./dock_daily');
const {DockDetail} = require('./dock_detail');
const {DockBulkCommodity} = require('./dock_bulk_commodity');
const {FcwlDaily}=require('./fcwl_daily');
const {fcDetail}=require('./dock_detail')
function init() {
    WlDaily.hasMany(WlDailyDispatcher, {
        foreignKey: "wl_daily_id"
    });
    WlDaily.hasMany(WlDetail, {
        foreignKey: "wl_daily_id"
    })
    WlDetail.hasMany(WlDailySpecialMachineryDetail, {
        foreignKey: "wl_daily_id"
    })
    WlDailyDispatcher.belongsTo(WlDaily, {foreignKey: "wl_daily_id"});
    WlDetail.belongsTo(WlDaily, {
        foreignKey: "wl_daily_id"
    })
    RZYDaily.hasMany(RZYDailyDetail, {
        foreignKey: "rzy_daily_id",
    })
    RZYDailyDetail.belongsTo(RZYDaily, {
        foreignKey: "rzy_daily_id"
    })
    PSZXDaily.hasMany(PSZXDailyDetail, {
        foreignKey: "pszx_daily_id"
    });
    PSZXDailyDetail.belongsTo(PSZXDaily, {
            foreignKey: "pszx_daily_id"
        }
    );
    DockDaily.hasMany(
        DockDetail, {
            foreignKey: "dock_daily_id"
        }
    );
    DockDaily.hasMany(DockBulkCommodity, {
        foreignKey: "dock_daily_id"
    })
    DockDetail.belongsTo(
        DockDaily, {
            foreignKey: "dock_daily_id"
        }
    );
    sequelize.sync({force: false});
}

module.exports = {
    init
}

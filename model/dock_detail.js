const Sequelize = require('sequelize');
const {Model, INTEGER, STRING, DATE, JSON} = Sequelize;
const {sequelize} = require('./com');

class DockDetail extends Model {

}

DockDetail.init({
    dock_name: {
        type:STRING,
        comment:"码头名称"
    },
    on_track:{
        type: INTEGER,
        comment: "火车在途量"
    },
    stock_train:{
        type:INTEGER,
        comment:"火车库存量"
    },
    stock_truck:{
        type:INTEGER,
        comment:"汽运库存量"
    },
    onload_ship:{
        type:INTEGER,
        comment:'在装船数'
    },
    planed:{
        type:INTEGER,
        comment:"预报装船"
    },
    settle_ship:{
        type:INTEGER,
        comment:"当日结船"
    },
    job:{
        type:INTEGER,
        comment:"当然作业"
    },
    crane:{
        type:INTEGER,
        comment:"吊机作业台数"
    }

}, {
    sequelize,
    modelName: "dock_daily"
})
module.exports={
    DockDetail
}

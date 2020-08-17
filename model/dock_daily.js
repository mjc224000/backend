const Sequelize = require('sequelize');
const {Model, INTEGER, STRING, DATE, JSON} = Sequelize;
const {sequelize} = require('./com');

class DockDaily extends Model {

}

DockDaily.init({
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    water_regimen: {
        type: STRING,
        comment: "水情"
    },
    quality: {
        type: JSON,
        comment: "生产，安全，服务质量"
    },


}, {
    sequelize,
    modelName: "dock_daily"
})
module.exports = {
    DockDaily
}

const xlsx = require("node-xlsx");
const {sequelize} = require('../model/com');
const {WlDaily} = require('../model/wl_daily');
const {WlDetail} = require('../model/wl_detail')
const {Dispatcher} = require('../model/dispatcher');
const {Department} = require('../model/department');
let path = require('path');

const {assembleWlDaily, getRecorder} = require('./xls_import');


async function makeWlData() {
    let d = xlsx.parse(path.resolve('./utils/wl_daily.xlsx'));
    d = d[0].data;

    let {name, job_date} = getRecorder(d);
    let wlData = assembleWlDaily(d)
    let {data, overviews} = wlData;
    const t = await sequelize.transaction();
    try {
        let wd = await WlDaily.create({
            job_date,
            valid: true
        }, {raw: true});
        wd = wd['dataValues'];
        let wl_daily_id = wd.id;
        for (let i = 0; i < data.length; i++) {
            let obj = data[i];
            let {departmentName} = obj;
            delete obj['departmentName'];
            let [department, done] = await Department.findOrCreate({
                where: {
                    name: departmentName,
                }, raw: true, transaction: t
            });
            let wlDetail = await WlDetail.create({
                wl_daily_id,
                department_id: department['id'],
                ...obj
            }, {
                transaction: t, raw: true
            })
        }
        await t.commit();
    } catch (e) {
        console.log(e);
        await t.rollback()
    }
}

async function initData() {
    await Dispatcher.findOrCreate({
        where: {
            name: "郑光杰"
        }
    })
}

module.exports = {makeWlData, initData}

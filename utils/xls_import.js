const xlsx = require("node-xlsx");
let path = require('path');

function formatDate(numb) {
    let excelEra = new Date("1900-1-1");

    let t = Date.parse(excelEra)
    return new Date(t + (numb - 1) * 86400 * 1000)

}

console.log(formatDate(44015.666666666664).toISOString());
let data = xlsx.parse(path.resolve('./utils/wl_daily.xlsx'));

let sheet = data[0].data;
sheet.forEach(function (item, index) {
    console.log(item, index);
})

function wlDailyDataImport(data) {
    let record = data[0];
    let [x1, names, x2, job_date, x3,x4, record_date] = record;
    console.log(names,job_date,record_date);
    return
}
wlDailyDataImport(sheet)
module.exports = {}



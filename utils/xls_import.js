const xlsx = require("node-xlsx");
let path = require('path');

function formatDate(numb) {
    let excelEra = new Date("1900-1-1");

    let t = Date.parse(excelEra)
    return new Date(t + (numb - 1) * 86400 * 1000)

}

let data = xlsx.parse(path.resolve('./utils/wl_daily.xlsx'));

let sheet = data[0].data;
sheet.forEach(function (item, index) {

})

function wlDailyDataImport(data) {
    let record = data[0];
    let unitKeywords = ['钢运', "铁鹏"];
    let overviews = [];
    // 主表关键信息
    let [x1, names, x2, job_date, x3, x4, record_date] = record;
    // 子表数组
    let detailData = [];
    // 截取不要的
    let i = 1;
    let department = undefined
    while (i < data.length) {
        let row = data[i];
        let validData = row.slice(5);
        department = row[1] && row[1].trim() || department;
        if (unitKeywords.indexOf(department) > -1) {
            let [load_name, origin, dest, planed, actual, finished, overview] = validData;
            if (overview) {
                overviews.push({
                    department,
                    overview
                })
            }
            detailData.push(
                {
                    load_name,
                    origin,
                    dest,
                    planed,
                    actual,
                    finished,
                    department
                });
        }
        i++;
    }
    return {
        wl_daily: {names, job_date, record_date},
        details: detailData,
        overviews
    }
}

function zjDailyDataImport(data) {
    let sheet = data[1].data;
    let record = sheet[0];
    let [x1, names, x2, job_date, x3, x4, record_date] = record;
    let detailData = [];
    let i = 1;
    let type = undefined;
    let carType = undefined;
    let overview = undefined;
    while (i < data.length) {
        let row = sheet[i];
        overview = row[10] || overview;
        type = row[1] || type;
        if (type === '车辆运量') {
            carType = row[3] || carType;
            let load_name = row[4];
            let origin = row[5];
            let dest = row[6];
            let planed = row[7];
            let cars = row[8];
            let actual = row[9];
            detailData.push({
                carType,
                load_name,
                origin,
                dest,
                planed,
                cars,
                actual
            })
        }
        if(type==='特种机械'){

        }
        i++;
    }
    return {
        zjDaily: {
            names, job_date, record_date
        },
        detailData,
        overview
    }
}

wlDailyDataImport(sheet)
zjDailyDataImport(data)
module.exports = {
    wlDailyDataImport,
    zjDailyDataImport
}



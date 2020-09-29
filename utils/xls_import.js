const xlsx = require("node-xlsx");
let path = require('path');

function formatDate(numb) {
    let excelEra = new Date("1900-1-1");

    let t = Date.parse(excelEra)
    return new Date(t + (numb - 1) * 86400 * 1000)

}

let data = xlsx.parse(path.resolve('./utils/wl_daily.xlsx'));

let sheet = data[0].data;
let sheet1 = data[1].data;
let sheet2 = data[2].data;
let sheet3 = data[3].data;
let sheet4 = data[4].data;


/**
 *
 * @param data
 * @param rowData
 * @param keywords
 * @param ak keywords的所在列
 * @param overviewCol, overview 所在的列
 */
function autoAssemble({
                          data,
                          rowData,
                          keywords,
                          hasOverviewCol,
                      }) {
    if (!data.length || !rowData.length || !keywords.length)
        return {}
    let ret = [];
    let first;
    let firstCol = rowData[0].col;
    let hash = {};
    for (let i = 0; i < data.length; i++) {
        let row = data[i];
        first = row[firstCol] && row[firstCol].trim() || first;
        if (keywords.indexOf(first) > -1) {
            let length = hasOverviewCol ? rowData.length - 1 : rowData.length
            for (let j = 0; j < length; j++) {
                let key = rowData[j].key;
                let col = rowData[j].col;
                hash[key] = row[col] && row[col].toString().trim() || hash[key];
                if (row[col] === 0)
                    hash[key] = 0;
                if (hash[key] === '/')
                    hash[key] = null;
            }
            ret.push({...hash})
        }
    }
    if (hasOverviewCol) {
        let overviews = {}
        let type
        for (let i = 0; i < data.length; i++) {
            let row = data[i];
            type = row[firstCol] || type;
            let overview = row[rowData[rowData.length - 1].col];
            type && type.trim();
            if (overview) {
                if (type && (type = type.trim()) && keywords.indexOf(type) > -1) {
                    overviews[type] = overviews[type] || [];
                    overviews[type].push(overview)
                }
            }
        }
        return {
            data: ret,
            overviews
        }
    } else {
        return {data: ret}
    }

}

function getRecorder(data) {
    if (!data || data.length === 0)
        return {}
    try {
        let row = data = data[0];
        let name = row[1];
        let job_date = row[6];

        return {name, job_date: formatDate(job_date)};
    } catch (e) {
        return e;
    }
}

const assembleWlDaily = (data) => {
    return autoAssemble({
        data: data,
        rowData: [
            {key: "departmentName", col: 1},
            {key: "load_name", col: 5},
            {key: "origin", col: 6},
            {key: "dest", col: 7},
            {key: "planed", col: 8},
            {key: "actual", col: 9},
            {key: "finished", col: 10},
            {col: 11}
        ],
        keywords: ["钢运", '铁鹏', '热钢', '特机'],
        hasOverviewCol: true
    })
}
const assembleZjDaily = (data) => {
    return autoAssemble({
        data,
        rowData: [
            {
                key: "type", col: 1
            },
            {
                key: "vehicle_type", col: 3
            },
            {
                key: "load_name", col: 4
            },
            {
                key: "origin",
                col: 5
            },
            {
                key: "dest",
                col: 6
            },
            {
                key: "planed",
                col: 7
            },
            {
                key: "actual", col: 8
            },
            {
                key: "finished", col: 9
            },
            {
                key: "overview", col: 10
            }
        ],
        keywords: ["车辆运量"],
        hasOverviewCol: true
    })
}
const assembleFcDaily = (data) => {
    return autoAssemble({
        data,
        rowData: [
            {key: "job_type", col: 0},
            {key: "load_name", col: 6},
            {key: "transportation_facility", col: 5},
            {key: "type", col: 1},
            {key: "origin", col: 7},
            {key: "dest", col: 8},
            {key: "planed", col: 9},
            {key: "actual", col: 10},
            {key: "finished", col: 11},
            {key: "overview", col: 12}
        ],
        keywords: ["原料进厂", "保产保运", "产品外发"],
        hasOverviewCol: true
    })
}
const assembleRzyDaily = (data) => {
    return autoAssemble({
        data,
        rowData: [
            {key: "region", col: 1},
            {key: "load_name", col: 2},
            {key: "quantity", col: 3},
            {key: "input", col: 4},
            {key: "output", col: 5},
            {key: "outside", col: 6},
            {key: "stock", col: 7},
            {key: "remain", col: 8},
            {key: "overview", col: 11},
        ],
        keywords: ['物流园作业区', '码头作业区', '南宁仓', '防城港一棒移库', '防城港'],
        hasOverviewCol: true
    })
};
const assembleRzyWagonDetail = (data) => {
    return autoAssemble({
        data,
        rowData: [
            {key: "type", col: 1},
            {key: "region", col: 2},
            {key: "input", col: 4},
            {key: "output", col: 5},
            {key: "wagons", col: 6},
            {key: "month_wagons_acc", col: 7},
            {key: "year_wagons_acc", col: 8},
            {key: "month_job_acc", col: 9},
            {key: "overview", col: 11}
        ],
        keywords: ['厂内装车皮作业区'],
        hasOverviewCol: true
    })
}
const assemblePszxDailyDetail = (data) => {
    return autoAssemble({
        data,
        rowData: [
            {key: "region", col: 0},
            {key: "location", col: 1},
            {key: "type", col: 1},
            {key: "planed", col: 1},
            {key: "planed_vehicles", col: 1},
            {key: "remain", col: 1},
            {key: "remain_vehicles", col: 1},
            {key: "actual_weight", col: 1},
            {key: "actual_vehicles", col: 1},
            {key: "unfinished_vehicles", col: 1},
            {key: "stock", col: 1},
            {key: "month_acc", col: 1},
            {key: "comment", col: 1}
        ], keywords: ['广东区域', '华东区域', '防钢基地', '广西区内']
        ,
        hasOverviewCol: false
    })
}
const assembleDockDetail = (data) => {
    return autoAssemble({
        data,
        rowData: [
            {key: "dock_name", col: 0},
            {key: "on_track", col: 1},
            {key: "stock_train", col: 2},
            {key: "stock_truck", col: 3},
            {key: "stock", col: 4},
            {key: "onload_ship", col: 5},
            {key: "planed", col: 6},
            {key: "settle_ship", col: 7},
            {key: "month_acc_ship", col: 8},
            {key: "month_acc_job", col: 9},
            {key: "job", col: 10},
            {key: "crane", col: 11},
        ],
        keywords: [
            "北港",
            "石龙",
            "鹧鸪江",
            "猛山", "二塘", '广钢'],
    })
}


module.exports = {
    assembleWlDaily,
    assembleZjDaily,
    assembleFcDaily,
    assembleRzyDaily,
    assemblePszxDailyDetail,
    assembleRzyWagonDetail,
    assembleDockDetail,
    getRecorder

}






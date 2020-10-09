const excelType = {
    "wl": "wl",
    "zj": "zj",
}

function getCurrentMonthTime() {
    var TimeNow = new Date();
    var startDay1 = new Date(TimeNow.getFullYear(), TimeNow.getMonth(), 1);//当月1号
    var endDay1 = new Date(TimeNow.getFullYear(), TimeNow.getMonth(), TimeNow.getDate(), 23, 59, 59);//23:59:59 将结束时间改成前一天
    return [startDay1, endDay1];

}



module.exports = {
    excelType,
    getCurrentMonthTime
}

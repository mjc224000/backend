let {init} = require('./model/init');
let express = require('express');
const xlsx = require("node-xlsx");


init();
let data = xlsx.parse('./28.xlsx');
let app = express();
data.forEach(function (item) {
    //console.log(item.data)
})
app.listen(8888);



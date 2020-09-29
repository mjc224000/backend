let express = require('express');
const xlsx = require("node-xlsx");
const fileRoute = require('./controller/file');
const {initData, makeWlData} = require('./utils/makeData')
let i = require('./utils/xls_import')
let {init} = require('./model/init');
let tool = require('./utils/xls_import')

let app = express();
app.use('/file', fileRoute);

async function main() {
    await init();
    await initData();
    await makeWlData();
}

main();

app.listen(8887);

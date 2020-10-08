const xlsx = require('node-xlsx');
const {sequelize} = require('../model/com');
const express = require('express');
const {Router} = express;
const router = Router();
const {Op, QueryTypes} = require('sequelize');
const formidable = require('formidable');
const fs = require('fs');
const path = require('path');
const uploadDir = path.resolve('./files');
const {excelType} = require('../utils/index');
const {assembleWlDaily, getRecorder} = require('../utils/xls_import');
const {WlDaily} = require('../model/wl_daily');
const {WlDetail} = require('../model/wl_detail');
const {Department} = require("../model/department");
router.post('/', function (req, res) {
    /**
     *  后台资源上传模块
     */
    const form = formidable.IncomingForm(
        {
            multiple: true,
            keepExtensions: true,
            uploadDir: uploadDir,
            maxFileSize: 4 * 1024 * 1024 * 1024,
            maxFieldsSize: 8 * 1024 * 1024 * 1024
        });
    form.parse(req, async (err, fields, files) => {
        let file = files['file'];
        if (!file)
            return;
        let p = file.path;
        let d = xlsx.parse(p);
        d = d[0].data;

        let {name, job_date} = getRecorder(d);
        let {data, overviews} = assembleWlDaily(d);
        console.log(job_date);
        const t = await sequelize.transaction();
        try {
            let wd = await WlDaily.create({
                job_date,
                valid: true
            }, {raw: true, transaction: t});

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
            t.rollback();

        }
        const {type} = fields;
        switch (type) {
            case excelType.wl: {

                break;
            }
            default: {

            }
        }
        files = Object.values(files);
        //是否有东西
        /*   let flag = false;
           for (let i = 0; i < files.length; i++) {
               let file = files[i];
               if (file.size) {
                   flag = true;
                   let {path, name, type} = file;
                   console.log(path, name, type);
                   if (name.indexOf('.xlsx') > -1) {
                       type = 'excel';
                   }
               }

           }*/
        res.sendStatus(204);
    });
});
module.exports = router

const express = require('express');
const {Router} = express;
const router = Router();
const {Op, QueryTypes} = require('sequelize');
const formidable = require('formidable');
const fs = require('fs');
const path = require('path');
const uploadDir = path.resolve('./files');
const {excelType} = require('../utils/index')
router.post('/', function (req, res) {
    /**
     *  后台资源上传模块
     */
    console.log(req.query);
    const form = formidable.IncomingForm(
        {
            multiple: true,
            keepExtensions: true,
            uploadDir: uploadDir,
            maxFileSize: 4 * 1024 * 1024 * 1024,
            maxFieldsSize: 8 * 1024 * 1024 * 1024
        });
    form.parse(req, async (err, fields, files) => {
        files = Object.values(files);
        //是否有东西
        let flag = false;
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
            res.sendStatus(204);
        }
    });
});
module.exports = router

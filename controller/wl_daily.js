const express = require('express');
const {col}=require('sequelize');
const {Router} = express;
const router = Router();
const {Op, QueryTypes} = require('sequelize');
const {WlDaily} = require('../model/wl_daily');
const {WlDetail} = require('../model/wl_detail');
const {Department} = require('../model/department');
router.get('/', async function (req, res) {
    let date = new Date();
    let month = date.getMonth();
    console.log(month);
    let data = await WlDaily.findAll({
        include: [{model: WlDetail, include: [Department]}],
        group:[col('wl_details.department.id')],
       raw:true
    });
    console.log(data);
    res.json(data);
}).post('/', async function (req, res) {

})

module.exports = router

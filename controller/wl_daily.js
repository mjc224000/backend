const express = require('express');
const {col, fn} = require('sequelize');
const {Router} = express;
const router = Router();
const {Op, QueryTypes} = require('sequelize');
const {WlDaily} = require('../model/wl_daily');
const {WlDetail} = require('../model/wl_detail');
const {Department} = require('../model/department');
const {getCurrentMonthTime} = require('../utils/index');
router.get('/', async function (req, res) {
    let data = await WlDaily.findAll({
        attributes: [
            [fn('sum', col('finished')), 'sum'], 'job_date'
        ],
        include: [
            {
                model: WlDetail,
                include: [{
                    model: Department,
                    attributes: [['name', 'name']]

                }],
                attributes: ['finished',]
            }
        ],
        group: [col('wl_details.department.id'), col('wl_daily.id')],
        raw: true
    });

    res.json(data);
}).post('/', async function (req, res) {

})

module.exports = router

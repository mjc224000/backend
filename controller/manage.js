const express = require('express');
const {col, fn} = require('sequelize');
const {Router} = express;
const router = Router();
const {WlDaily} = require('./wl_daily');
router.get('/', async function (req, res) {
    let ret = await WlDaily.findAll({raw: true});
    res.json(ret);

})

module.exports = router

const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const { config } = require('dotenv')
config()

const dbUrl = process.env.dbtest

mongoose.connect(dbUrl)

const Item = require('../models/items')

router.get('/', async (req, res) => {
    const items = await Item.find()
    const randomItem = items[Math.floor(Math.random() * items.length)]  
    res.json(randomItem)
})


module.exports = router
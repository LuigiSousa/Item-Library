const express = require('express')
const router = express.Router()

const Item = require('../models/items')
const mongoose = require('mongoose')
const { config } = require('dotenv')
config()

const urlDb = process.env.dbtest
mongoose.connect(urlDb)

router.use(express.json())
router.use(express.urlencoded({ extended: true }))

router.get('/', async (req, res) => {
    res.sendFile(__dirname + '/createItem/newItemForm.html')
})

router.post('/', async (req, res) => {

    if (req.body.usable === 'on') {
        req.body.usable = true
    } else {
        req.body.usable = false
    }

    const newItem = new Item({
        Id: req.body.id,
        name: req.body.name,
        rarity: req.body.rarity,
        usable: req.body.usable,
        description: req.body.description,
        image: req.body.image,
    })

    console.log(newItem)

    await newItem.save()

    res.redirect('/createItem/completed')
})

router.get('/completed', (req, res) => {
    res.sendFile(__dirname + '/createItem/createItemComplete.html')
})

module.exports = router
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const { config } = require('dotenv')
config()

router.use(express.json())
router.use(express.urlencoded({ extended: true }))

const urlDb = process.env.dbtest

mongoose.connect(urlDb)

const Item = require('../models/items')

router.get('/', (req, res) => {
    res.sendFile(__dirname + '/deleteItem/deleteItemForm.html')
})

router.post('/', async (req, res) => {
    const deleteId = Number(req.body.id)

    await Item.deleteOne({ Id: deleteId })
    console.log('Item deleted: Id:' + deleteId)
    
    res.redirect(`/deleteItem/completed`)
})

router.get('/completed', (req, res) => {
    res.sendFile(__dirname + '/deleteItem/deleteItemComplete.html')
})

module.exports = router
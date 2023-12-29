const mongoose = require('mongoose')
const { config } = require('dotenv')
const cors = require('cors')

config()
const urlDb = process.env.dbtest

mongoose.connect(urlDb)

const express = require("express")
const app = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", async (req, res) => {
    res.sendFile(__dirname + '/menuPage/menu.html')
})

const itemCreateRouter = require('./router/createItem')
const itemListRouter = require('./router/itemList')
const itemDeleteRouter = require('./router/deleteItem')
const randomItemRouter = require('./router/randomItem')

app.use('/createItem', itemCreateRouter)
app.use('/allItems', itemListRouter)
app.use('/deleteItem', itemDeleteRouter)
app.use('/randomItem', randomItemRouter)


app.get('*', (req, res) => {
    res.redirect('/')
})

app.listen(2007, () => {
    console.log('127.0.0.1:2007')
})
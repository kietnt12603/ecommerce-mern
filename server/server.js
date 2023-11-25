const express = require('express')
require('dotenv').config()
const dbConnect = require('./config/dbconnect')
const initRouters = require('./routers')
const app = express()
const port = process.env.PORT || 12603

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

dbConnect()
initRouters(app)
app.use('/', (req, res) => {
    res.send('ON')
})

app.listen(port, () => {
    console.log('server listening on port:' + port);
})
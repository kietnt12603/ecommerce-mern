const express = require('express')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 12603

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', (req, res) => {
    res.send('ON')
})

app.listen(port, () => {
    console.log('server listening on port:' + port);
})
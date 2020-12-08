const express = require('express')
const app = express()
const path = require('path')

const mongoose = require('mongoose')
//we need to make DB in atlas
mongoose.connect("mongodb://localhost/student", {useNewUrlParser: true, useUnifiedTopology: true})


const api = require('./server/routes/api')

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/',api)

const port = 8080
app.listen(port, function () {
    console.log(`server runs on port : ${port}`)

})
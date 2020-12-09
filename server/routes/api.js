const express = require('express')
const router = express.Router()
const axios = require('axios');
const mongoose = require('mongoose');
const User = require('../models/User')
// const Employee = require('./Models/employer.js')

router.post('/userSignUp', async function (req, res) {
    const Username = req.body.username
    const data = await axios.get(`https://www.codewars.com/api/v1/users/${Username}?access_key=Ka6QAn4J3s9GvrdE4vtw`)

    if (data.data.username === Username) {
        const user = new User({
            userName: Username,
            password: req.body.password,
            name: req.body.name,
            skills: data.data.skills,
            rank: data.data.ranks.overall.rank || 0,
            challenges: []

        })
        user.save()
    }
    res.end()
})


router.get('/challenge/:type', async function (req, res) {
    const type = req.params.type
    axios.get(`https://www.codewars.com/api/v1/code-challenges/${type}?access_key=Ka6QAn4J3s9GvrdE4vtw`)
        .then(function (response) {
            // handle success
            res.send(response.data)
        })
        .catch(function (error) {
            res.send(error)
        })
})

router.post('/userSignIn/', async function (req, res) {
    const username = req.body.username
    const password = req.body.password
    if(!username || !password){
        res.send(null)
        return
    }
    console.log(username)
    console.log(password)
    const user = await User.findOne({
        userName: username,
        password: password
    })
    if(user === null)
    {
        res.send(null)
        return
    }
    res.send(user)
})


module.exports = router

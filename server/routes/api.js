const express = require('express')
const router = express.Router()
const axios = require('axios');
const mongoose = require('mongoose');
const User = require('../models/User')
const Challenge = require('../models/Challenge');


router.post('/userSignUp', async function (req, res) {
    const Username = req.body.username

        const data = await axios.get(`https://www.codewars.com/api/v1/users/${Username}?access_key=Ka6QAn4J3s9GvrdE4vtw`)
    
    if (data.data.username === Username) {
        const user = new User({
            username: Username,
            password: req.body.password,
            name: req.body.name,
            skills: data.data.skills,
            rank: data.data.ranks.overall.rank * -1 || 0 ,
            challenges: []
        })
        user.save()
        res.send(user)
        return
    }
    else
    {
        res.end()
    }
    
    
})

router.get('/explore/:skills', async function (req, res) {
    console.log(req.params.skills)
    const blackList = req.params.skills
    const found = await Challenge.find({},{skill: 1,_id:0})
    console.log(blackList)
    const found2 = await found.filter(s => !blackList.includes(s.skill))
    let a = found2.map(f => f.skill)
    list = a.filter((x, i, v) => v.indexOf(x) === i)
    console.log(list)
    res.send(list)
})

router.post('/challenges/', async function (req, res) {
    const type = req.body.skill
    const found= await Challenge.find({skill:type})
    res.send(found)
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
        username: username,
        password: password
    })
    if(user === null)
    {
        res.send(null)
        return
    }
    res.send(user)
})

router.put('/addSkill/:skill/:username',async function(req,res){
    const skill = req.params.skill
    const username = req.params.username
     User.findOneAndUpdate({username: username},{$push:{skills: skill}},function(err,data)
     {
        console.log(data)
        res.send(data.skills[data.skills.length - 1])
     })
    
})

module.exports = router


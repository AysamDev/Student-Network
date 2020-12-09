const express = require('express')
const router = express.Router()
const axios = require('axios');
const mongoose = require('mongoose');
const User = require('../models/User')
const Challenge = require('../models/Challenge')

const callSave = async function()
{
//1
let ch = await axios.get(`https://www.codewars.com/api/v1/code-challenges/valid-braces?access_key=Ka6QAn4J3s9GvrdE4vtw`)
let chall = new Challenge(
    {
        slug: ch.data.slug,
        url: ch.data.url,
        skill: "java" 
    }
)
chall.save()
//2
 ch = await axios.get(`https://www.codewars.com/api/v1/code-challenges/sum-of-digits-slash-digital-root?access_key=Ka6QAn4J3s9GvrdE4vtw`)
 chall = new Challenge(
    {
        slug: ch.data.slug,
        url: ch.data.url,
        skill: "javascript" 
    }
)
chall.save()
//3
ch = await axios.get(`https://www.codewars.com/api/v1/code-challenges/list-filtering?access_key=Ka6QAn4J3s9GvrdE4vtw`)
chall = new Challenge(
   {
       slug: ch.data.slug,
       url: ch.data.url,
       skill: "javascript" 
   }
)
//4
ch = await axios.get(`https://www.codewars.com/api/v1/code-challenges/who-likes-it?access_key=Ka6QAn4J3s9GvrdE4vtw`)
chall = new Challenge(
   {
       slug: ch.data.slug,
       url: ch.data.url,
       skill: "javascript" 
   }
)
chall.save()
//5
ch = await axios.get(`https://www.codewars.com/api/v1/code-challenges/friend-or-foe?access_key=Ka6QAn4J3s9GvrdE4vtw`)
chall = new Challenge(
   {
       slug: ch.data.slug,
       url: ch.data.url,
       skill: "javascript" 
   }
)
chall.save()
//6
ch = await axios.get(`https://www.codewars.com/api/v1/code-challenges/multiply?access_key=Ka6QAn4J3s9GvrdE4vtw`)
chall = new Challenge(
   {
       slug: ch.data.slug,
       url: ch.data.url,
       skill: "python" 
   }
)
chall.save()
}
callSave()
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
//update 
router.post('/addChallenge',async function(req,res){
    const challenge = req.body.challenge
    const user = req.body.user
    User.findOneAndUpdate({userName:user},{ $push: { challenges: challenge  } }, function(err,data){
        if(err)
            res.send(err)
        res.end()    
    })
})

module.exports = router

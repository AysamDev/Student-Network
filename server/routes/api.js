const express = require('express')
const router = express.Router()
const axios = require('axios');
const User = require('../models/User.js')
// const Employee = require('./Models/employer.js')

router.post('/userSignUp',async function(req,res){
const Username = req.body.username
const data = await axios.get(`https://www.codewars.com/api/v1/users/${Username}?access_key=Ka6QAn4J3s9GvrdE4vtw`)
if(data.username===Username)
{
    const user = new User({ 
        username:Username,
        password:req.body.passsword,
        name:req.body.name,
        skills:data.skills,
        rank:data.ranks.overall.rank || 0,
        challenges:[]
})
user.save()
res.send("Signed Up Successfully")
}
res.send("incorrect user name")
})

router.get('/sign')
router.get('/challenge/:type',async function(req,res){
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

router.get('/userData/:userName/:password',async function(req,res){
  
})
module.exports = router
    
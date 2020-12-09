const mongoose = require('mongoose')
const Schema = mongoose.Schema

const challenge = new Schema({
    slug:{type:String,required:true},
    url:{type:String,required:true},
    skill:{type:String,required:true},
    
})

const Challenge = mongoose.model('challenge', challenge) 

module.exports = Challenge
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const user = new Schema({
    name:{type:String,required:true},
    password:{type:String,required:true},
    userName:{type:String,required:true},
    rank:{type:Number,required:true},
    skills:[{type:String}],
    challenges:[{type:String}]
})

const User = mongoose.model('user', user) 

module.exports = User
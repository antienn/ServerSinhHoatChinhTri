const mongoose = require("mongoose");

const User = new mongoose.Schema({
    name:{
        type: String,
        require:true,
        trim:true,
    },
    date: {
        type: String,
        require:true,
        trim:true,
    },
    content:{
        type:String,
        require:true,
        trim:true,
    },
    urlimage:{
        type:String,
        require:true,
        trim:true,
    }
})

module.exports = new mongoose.model('user',User);
const mongoose = require('mongoose')


const botSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
        trim:true,
    },
    type:{
        type: String,
        required:true,
        trim:true,
    },
    description:{
        type:String,
        required:true,
    },

    like: {
        type: String,
        default:0
    },

    dislike: {
        type: String,
        default:0
    },
    link:{
        type:String,
    }
}
)
    
 

module.exports = mongoose.model("Bot", botSchema)
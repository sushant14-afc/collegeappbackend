const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema

const tokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true
    },
    userId: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    CreatedAt:{
        type:Date,
        default:Date.now(),
        expires:86400
    }
})

module.exports = mongoose.model('Token',tokenSchema)
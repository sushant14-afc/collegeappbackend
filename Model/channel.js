const mongoose = require('mongoose')


const channelSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
        trim: true,
    },
    Type: {
        type: String,
        required: true,
        trim: true,
    },
    Description: {
        type: String,
        required: true,
    },

    Like: {
        type: String,
        default:0
    },

    Dislike: {
        type: String,
        default:0
    },
}
)



module.exports = mongoose.model("Channel", channelSchema)
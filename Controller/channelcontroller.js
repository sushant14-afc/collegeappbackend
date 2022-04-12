

const Channel = require("../Model/channel")


// to add channel
exports.addChannel= async (req, res) => {
    let channel = new channel(req.body)
    Channel.findOne({ channel_name: Channel.channel_name }, async (error, data) => {
        if (data == null) {
            channel = await channel.save()
            if (!channel) {
                return res.status(400).json({ error: "something went wrong" })
            }
            else {
                res.send(channel)
            }
        }
        else{
            return res.status(400).json({ error: "channel already exists." })

        }
    })

}

// to show all channel
exports.showChannels = async (req, res) => {
    let channels = await Channel.find()
    if (!channels) {
        return res.status(400).json({ error: "something went wrong" })
    }
    else {
        res.send(channels)
    }
}

// to view a channel
exports.findChannel = async (req, res) => {
    let channel = await Channel.findById(req.params.id)
    if (!channel) {
        return res.status(400).json({ error: "something went wrong" })
    }
    else {
        res.send(channel)
    }
}

// to update a channel
exports.updateChannel = async (req, res) => {
    let channel = await Channel.findByIdAndUpdate(
        req.params.id,
        {
            channel_name: req.body.channel_name
        },
        { new: true }
    )
    if (!channel) {
        return res.status(400).json({ error: "something went wrong" })
    }
    else {
        res.send(channel)
    }
}

// to delete a channel
exports.deleteChannel = (req, res) => {
    let channel = Channel.findByIdAndRemove(req.params.id)
        .then(channel => {
            if (!channel) {
                return res.status(400).json({ error: "channel not found" })
            }
            else {
                return res.status(200).json({ msg: "channel deleted successfully" })
            }
        })
        .catch(error => res.status(400).json({ error: error }))
}
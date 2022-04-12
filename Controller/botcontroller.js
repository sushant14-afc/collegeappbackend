
const bot = require("../Model/bot");
const Bot = require("../Model/bot");




// To Add User

exports.addBot = async (req, res) => {
    let bot = new Bot({
        name: req.body.name,
        type: req.body.type,
        description: req.body.description,
        like: 0,
        dislike: 0,
        link: req.body.link,

    });
    Bot.findOne({ name: bot.name }, async (error, data) => {
        if (data == null) {
            bot = await bot.save()

            if (!bot) {
                return res.status(400).json({ error: "Something went wrong." });
            } else {
                res.send(bot);
            }
        }
        else {
            return res.status(400).json({ error: "Choose a different bot name." });
        }
    });
};









// to view all bots
exports.botList = async (req, res) => {
    const bot = await Bot.find()
    if (!bot) {
        return res.status(400).json({ error: "something went wrong" })
    }
    res.send(bot)
}

// to find individual/particular bot
exports.findbot = async (req, res) => {
    const bot = await Bot.findById(req.params.botid)
    if (!bot) {
        return res.status(400).json({ error: "bot not found" })
    }
    res.send(bot)
}

exports.findBot = async (req, res) => {
    let bot = await Bot.findById(req.params.id)
    if (!bot) {
        return res.status(400).json({ error: "something went wrong" })
    }
    else {
        res.send(bot)
    }
}

// to update a bot
exports.updatebot = async (req, res) => {
    let bot = await Bot.findByIdAndUpdate(
        req.params.id,
        {
            Name: req.body.name
        },
        { new: true }
    )
    if (!bot) {
        return res.status(400).json({ error: "something went wrong" })
    }
    else {
        res.send(bot)
    }
}

// to delete a category
exports.deletebot = (req, res) => {
    let bot = Bot.findByIdAndRemove(req.params.id)
        .then(bot => {
            if (!bot) {
                return res.status(400).json({ error: "bot not found" })
            }
            else {
                return res.status(200).json({ msg: "bot deleted successfully" })
            }
        })
        .catch(error => res.status(400).json({ error: error }))
}
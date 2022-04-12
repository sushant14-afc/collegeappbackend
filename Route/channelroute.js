const express = require('express')
const router = express.Router()

const { addChannel, findChannel, updateChannel, deleteChannel, showChannels } = require('../Controller/channelController')
const { requireSignin } = require('../Controller/userController')


router.post('/addchannel',addChannel)

router.get('/channels',showChannels)
router.get('/findchannel/:id',findChannel)
router.put('/updateChannel/:id', requireSignin,updateChannel)
router.delete('/deleteChannel/:id', requireSignin,deleteChannel)






module.exports = router
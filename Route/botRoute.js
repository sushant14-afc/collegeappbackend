const express = require('express')
const { addBot, findbot, botList, updatebot, deletebot } = require('../Controller/botcontroller')
const { botValidation } = require('../Validation/botValidation')

const router = express.Router()

router.post('/addbot',botValidation, addBot)

router.put('/updatebot/:id',updatebot)
router.delete('/deletebot/:id',deletebot)
router.get('/botlist',botList)
router.get('/findbot/:botid',findbot)

module.exports = router
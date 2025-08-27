const express = require('express')
const router = express.Router()
const controller = require('../controllers/followsController')

router.get('/', controller.getAllFollows)
router.get('/:id', controller.getFollowsById)
router.post('/', controller.createFollows)
router.put('/:id', controller.updateFollows)
router.delete('/:id', controller.deleteFollows)

module.exports = router



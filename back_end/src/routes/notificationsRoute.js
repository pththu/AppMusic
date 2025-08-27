const express = require('express')
const router = express.Router()
const controller = require('../controllers/notificationController')

router.get('/', controller.getAllNotification)
router.get('/:id', controller.getNotificationById)
router.post('/', controller.createNotification)
router.put('/:id', controller.updateNotification)
router.delete('/:id', controller.deleteNotification)

module.exports = router



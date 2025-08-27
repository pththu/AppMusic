const express = require('express')
const router = express.Router()
const controller = require('../controllers/listening_historyController')

router.get('/', controller.getAllListeningHistory)
router.get('/:id', controller.getListeningHistoryById)
router.post('/', controller.createListeningHistory)
router.put('/:id', controller.updateListeningHistory)
router.delete('/:id', controller.deleteListeningHistory)

module.exports = router



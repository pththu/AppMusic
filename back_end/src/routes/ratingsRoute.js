const express = require('express')
const router = express.Router()
const controller = require('../controllers/ratingController')

router.get('/', controller.getAllRating)
router.get('/:id', controller.getRatingById)
router.post('/', controller.createRating)
router.put('/:id', controller.updateRating)
router.delete('/:id', controller.deleteRating)

module.exports = router



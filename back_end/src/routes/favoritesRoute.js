const express = require('express')
const router = express.Router()
const controller = require('../controllers/favorite_songController')

router.get('/', controller.getAllFavoriteSong)
router.get('/:id', controller.getFavoriteSongById)
router.post('/', controller.createFavoriteSong)
router.put('/:id', controller.updateFavoriteSong)
router.delete('/:id', controller.deleteFavoriteSong)

module.exports = router



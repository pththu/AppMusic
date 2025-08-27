const express = require('express')
const router = express.Router()
const controller = require('../controllers/search_historyController')

router.get('/', controller.getAllSearchHistory)
router.get('/:id', controller.getSearchHistoryById)
router.post('/', controller.createSearchHistory)
router.put('/:id', controller.updateSearchHistory)
router.delete('/:id', controller.deleteSearchHistory)

module.exports = router



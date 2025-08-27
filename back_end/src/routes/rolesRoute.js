const express = require('express')
const router = express.Router()
const controller = require('../controllers/rolesController')

router.get('/', controller.getAllRoles)
router.get('/:id', controller.getRolesById)
router.post('/', controller.createRoles)
router.put('/:id', controller.updateRoles)
router.delete('/:id', controller.deleteRoles)

module.exports = router



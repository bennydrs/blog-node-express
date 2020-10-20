const express = require('express')
const router = express.Router()
const blogController = require('../controllers/blogController')

router.get('/', blogController.index)
router.get('/create', blogController.create)
router.post('/create', blogController.store)
router.get('/edit/:id', blogController.edit)
router.get('/:id', blogController.show)
router.post('/:id', blogController.update)
router.delete('/:id', blogController.destroy)

module.exports = router
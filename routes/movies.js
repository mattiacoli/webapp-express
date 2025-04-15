const router = require('express').Router()
const movieController = require('../controllers/movieController')

// index
router.get('/', movieController.index)


module.exports = router
const router = require('express').Router()
const movieController = require('../controllers/movieController')

// index
router.get('/', movieController.index)

// show
router.get('/:id', movieController.show)


// store new review
router.post('/:id/review', movieController.storeReview)

// store new movie
router.post('/add_movie', movieController.newMovie)

module.exports = router
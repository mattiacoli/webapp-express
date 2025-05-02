const router = require('express').Router()
const movieController = require('../controllers/movieController')

// Multer middeware for file uploads
const multer = require('multer')
// Configure the storage engine
const storage = multer.diskStorage({
  destination: 'public/images',
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
})

const upload = multer({ storage: storage })

// index
router.get('/', movieController.index)

// show
router.get('/:id', movieController.show)


// store new review
router.post('/:id/review', movieController.storeReview)

// store new movie
router.post('/add_movie', upload.single('image'), movieController.newMovie)

module.exports = router
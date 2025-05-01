
const connection = require('../data/db')

function index(req, res) {
  const sql = 'SELECT * FROM movies'

  connection.query(sql, (error, results) => {
    if (error) return res.status(500).json('Server Error')
    res.json(results)
  })
}


function show(req, res) {
  const id = Number(req.params.id)

  const sql = 'SELECT * FROM movies WHERE id=?'

  const sqlReview = 'SELECT * FROM reviews WHERE movie_id = ?'

  connection.query(sql, [id], (err, results) => {
    if (err) return res.status(500).json('Server Error')
    if (results.length === 0) return res.status(404).json({ error: 'Movie not found' })
    const movie = results[0]

    connection.query(sqlReview, [id], (err, reviews) => {
      if (err) return res.status(500).json('Server Error')
      movie.reviews = reviews
      res.json(movie)
    })
  })
}


function storeReview(req, res) {
  const id = Number(req.params.id)

  const created_at = new Date().toISOString().slice(0, 19).replace('T', ' ')
  const updated_at = created_at

  const { name, vote, text, } = req.body

  const sql = 'INSERT INTO reviews (movie_id, name, vote, text, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?)'

  const values = [id, name, vote, text, created_at, updated_at]

  connection.query(sql, values, (error, results) => {
    if (error) return res.status(500).json(error.message)
    if (results.affectedRows === 0) return res.status(404).json('Error! Movie not Found')
    res.status(201).json({ message: 'Review added succesfully', reviewId: results.insertId })
  })
}

function newMovie(req, res) {

  const created_at = new Date().toISOString().slice(0, 19).replace("T", " ")
  const updated_at = created_at

  const { title, director, genre, release_year, abstract, image } = req.body

  const sql = 'INSERT INTO movies  (title, director, genre, release_year, abstract, image, created_at, updated_at)  VALUES(?, ?, ?, ?, ?, ?, ?, ?)'

  const values = [title, director, genre, release_year, abstract, image, created_at, updated_at]

  connection.query(sql, values, (error, results) => {
    if (error) return resStatus(500).json(error.message)
    res.status(201).json('Movie added succesfully')
  })

}


module.exports = { index, show, storeReview, newMovie }
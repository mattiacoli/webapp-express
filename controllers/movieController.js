const connection = require('../data/db')

function index(req, res) {
  const sql = 'SELECT * FROM movies'

  connection.query(sql, (error, results) => {
    if (error) return res.status(500).json('Server Error')
    res.json(results)
  })
}


function show(req, res) {
  const id = req.params.id

  const sql = 'SELECT * FROM movies WHERE id=?'

  connection.query(sql, [id], (err, results) => {
    if (err) return res.status(500).json('Server Error')
    if (results.length === 0) return res.status(404).json('Movie not found')
    const movie = results[0]
    res.json(movie)
  })
}




module.exports = { index, show }
const connection = require('../data/db')

function index(req, res) {
  const sql = 'SELECT * FROM movies'

  connection.query(sql, (error, results) => {
    if (error) return res.status(500).json('Server Error')
    res.json(results)
  })
}




module.exports = { index }
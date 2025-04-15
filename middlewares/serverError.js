const serverError = (err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send('Something broke in server')
}

module.exports = serverError
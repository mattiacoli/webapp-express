const notFound = (res, req, next) => {
  res.status(404).send('Page not Found')
}


module.exports = notFound
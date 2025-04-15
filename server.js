const express = require('express')
const cors = require('cors')
const movieRouter = require('./routes/movies')
const app = express()
const port = 3000

// middleware for cors
app.use(cors({
  origin: process.env.FRONT_URL || 'http://localhost:5173'
}))


// middleware for body parse
app.use(express.json())

// middleware for static assets
app.use(express.static('public'))



// base route
app.get('/', (req, res) => {
  res.send('Welcome to Movies API')
})


app.use('/api/v1/movies', movieRouter)





app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
})
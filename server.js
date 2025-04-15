const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

// middleware for cors
app.use(cors({
  origin: process.env.FRONT_URL || 'http://localhost:5173'
}))




// base route
app.get('/', (req, res) => {
  res.send('Welcome to Movies API')
})






app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
})
const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const authRoute = require('./routes/auth')
const usersRoute = require('./routes/users')
const moviesRoute = require('./routes/movies')
const listsRoute = require('./routes/lists')

const app = express()

mongoose
  .connect(process.env.DATABASE)
  .then((con) => {
    console.log('successful')
    console.log(con.connections)
  })
  .catch((err) => {
    console.log('error')
    console.log(err)
  })

app.use(express.json())
app.use('/api/auth', authRoute)
app.use('/api/users', usersRoute)
app.use('/api/movies', moviesRoute)
app.use('/api/lists', listsRoute)

const port = process.env.PORT || 8800
app.listen(port, () => {
  console.log(`App running on port ${port}`)
})

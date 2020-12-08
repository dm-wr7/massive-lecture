require('dotenv').config()
const express = require('express')
const app = express()
const massive = require('massive')
const movieCtrl = require('./movieController')

const { SERVER_PORT, CONNECTION_STRING } = process.env

app.use(express.json())

app.get('/api/movies', movieCtrl.getAllMovies)
app.get('/api/movies/:movie_id', movieCtrl.getMovieById)
app.post('/api/movies', movieCtrl.addMovie)
app.put('/api/movies/:movie_id', movieCtrl.editMovie)
app.delete('/api/movies/:movie_id', movieCtrl.deleteMovie)

massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false,
  },
}).then((dbInstance) => {
  console.log('DB Ready')
  app.set('db', dbInstance)
  app.listen(SERVER_PORT, () => console.log(`Running on port ${SERVER_PORT}`))
})

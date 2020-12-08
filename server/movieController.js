module.exports = {
  getAllMovies: (req, res) => {
    const db = req.app.get('db')

    db.get_all_movies().then((movies) => {
      res.status(200).send(movies)
    })
  },
  getMovieById: (req, res) => {
    const db = req.app.get('db')
    const { movie_id } = req.params

    db.get_movie_by_id([movie_id]).then((movie) => {
      res.status(200).send(movie)
    })
  },
  addMovie: (req, res) => {
    const db = req.app.get('db')
    const { title, poster, year } = req.body

    db.add_new_movie([title, poster, year])
      .then((movie) => {
        res.status(200).send(movie)
      })
      .catch((err) => {
        res.status(400).send(err)
      })
  },
  editMovie: (req, res) => {
    const db = req.app.get('db')
    const { movie_id } = req.params
    const { title, poster, year } = req.body

    db.edit_movie_by_id([title, poster, year, movie_id])
      .then((movie) => {
        res.status(200).send(movie)
      })
      .catch((err) => {
        res.status(400).send(err)
      })
  },
  deleteMovie: (req, res) => {
    const db = req.app.get('db')
    const { movie_id } = req.params

    db.delete_movie_by_id([movie_id]).then(() => {
      res.sendStatus(200)
    })
  },
}

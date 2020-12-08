require("dotenv").config();
const express = require("express");
const app = express();
const massive = require("massive");

const { SERVER_PORT, CONNECTION_STRING } = process.env;

app.use(express.json());

app.get("/api/movies", movieCtrl.gatAllMovies);
app.get("/api/movies/:movie_id", movieCtrl.getMovieById);
app.post("/api/movies", movieCtrl.addMovie);
app.put("/api/movies/:movie_id", movieCtrl.editMovie);
app.delete("/api/movies/:movie_id", movieCtrl.deleteMovie);

//you will forget this... its okay...
massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false,
  },
}).then((dbInstance) => {
  console.log("DB Ready Master Nya~");

  app.set("db", dbInstance);

  app.listen(SERVER_PORT, () =>
    console.log(`Ready on port ${SERVER_PORT} Master Nya~ =^W^=`)
  );
});

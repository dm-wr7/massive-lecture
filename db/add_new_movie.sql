INSERT INTO movies (title, poster, year)
VALUES ($1, $2, $3)
returning *;
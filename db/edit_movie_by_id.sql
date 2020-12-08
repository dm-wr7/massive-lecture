UPDATE movies
SET title = $1, poster = $2, year = $3
WHERE id = $4
returning *;
DROP TABLE IF EXISTS movies;

CREATE TABLE movies (
  id SERIAL PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  poster TEXT,
  year VARCHAR(4)
);

INSERT INTO movies (title, poster, year)
VALUES ('Tenet', 'https://i.pinimg.com/originals/71/2b/46/712b465c00e58971bd8ce7becf7f8b46.png', 2020), ('Jurrasic Park', 'https://images-na.ssl-images-amazon.com/images/I/61RLRZnbc%2BL._AC_SL1000_.jpg', 1993);
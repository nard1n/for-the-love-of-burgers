-- queries to populate burgers table with at least three entries
USE burgers_db;

INSERT INTO burgers (burger_name, devoured)
VALUES ("Classic", 1);

INSERT INTO burgers (burger_name)
VALUES ("Baja");

INSERT INTO burgers (burger_name)
VALUES ("Impossible");
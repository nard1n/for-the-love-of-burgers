-- queries to populate burgers table with at least three entries
USE burgers_db;

INSERT INTO burgers (burger_name, devoured)
VALUES ("Classic", 1);

INSERT INTO burgers (burger_name, devoured)
VALUES ("Baja", 0);

INSERT INTO burgers (burger_name, devoured)
VALUES ("Impossible", 0);
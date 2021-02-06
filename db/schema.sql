-- Write SQL queries this file that do the following:
-- Create the burgers_db.
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
-- Switch to or use the burgers_db.
-- Create a burgers table (fields: id, burger_name, devoured)
USE burgers_db;

CREATE TABLE burgers(
    id INTEGER NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR (30) NOT NULL,
    devoured BOOLEAN,
    PRIMARY KEY (id)
);
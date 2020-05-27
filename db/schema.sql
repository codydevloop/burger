CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
    id INTEGER NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(50) NOT NULL,
    devoured BOOLEAN DEFAULT 0,
	PRIMARY KEY (id)
)
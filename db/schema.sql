CREATE DATABASE Burgers_db;

USE Burgers_db;

CREATE TABLE burgers
(
    id INTEGER NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR (50) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY(id)
);
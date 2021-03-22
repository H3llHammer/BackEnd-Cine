CREATE DATABASE IF NOT EXISTS cinema;

USE cinema;

CREATE TABLE IF NOT EXISTS salas
(
	ID_sala int NOT NULL AUTO_INCREMENT,
    Numero_asientos int NOT NULL,
    Precio decimal(6,2) NOT NULL,
    PRIMARY KEY (ID_sala)
);

DESCRIBE salas;

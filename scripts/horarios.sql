CREATE DATABASE IF NOT EXISTS cinema;

USE cinema;

CREATE TABLE IF NOT EXISTS horarios
(
	ID_horario int NOT NULL AUTO_INCREMENT,
    Hora time,
    ID_sala int,
    PRIMARY KEY (ID_horario),
    FOREIGN KEY (ID_sala) REFERENCES salas(ID_sala)
);

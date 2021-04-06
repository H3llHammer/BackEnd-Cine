CREATE DATABASE IF NOT EXISTS cinema;

USE cinema;

CREATE TABLE IF NOT EXISTS peliculas
(
  ID int NOT NULL AUTO_INCREMENT,
  Nombre varchar(100),
  Genero varchar(20),
  Duracion varchar(10),
  Sinopsis text,
  Actores varchar(100),
  Directores varchar(100),
  ID_sala int,
  Imagen longblob,
  PRIMARY KEY(ID),
  FOREIGN KEY (ID_sala) REFERENCES salas(ID_sala)
);
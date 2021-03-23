CREATE DATABASE IF NOT EXISTS cinema;

USE cinema;

CREATE TABLE IF NOT EXISTS usuarios
(
	ID_usuario int NOT NULL AUTO_INCREMENT,
    Nombres varchar(30),
    Apellidos varchar(30),
    Rol VARCHAR(20),
    Root bool,
    Username varchar(20) NOT NULL,
    Password varchar(100) NOT NULL,
    PRIMARY KEY(ID_usuario)
);
CREATE DATABASE IF NOT EXISTS cinema;

USE cinema;

CREATE TABLE IF NOT EXISTS usuarios
(
	ID_usuario int NOT NULL AUTO_INCREMENT,
    Nombres varchar(30) NOT NULL,
    Apellidos varchar(30) NOT NULL,
    Rol VARCHAR(20) NOT NULL,
    Root bool,
    Username varchar(20) NOT NULL,
    Password varchar(20) NOT NULL,
    PRIMARY KEY(ID_usuario)
);
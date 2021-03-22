CREATE DATABASE IF NOT EXISTS cinema;

USE cinema;

CREATE TABLE IF NOT EXISTS ventaBoletos
(
	ID_venta int NOT NULL AUTO_INCREMENT,
    Hora time,
    TotalVenta decimal(6,2) NOT NULL,
    TotalBoletos decimal(6,2) NOT NULL,
    ID_usuario int,
    PRIMARY KEY(ID_venta),
    FOREIGN KEY(ID_usuario) REFERENCES usuarios(ID_usuario)
);
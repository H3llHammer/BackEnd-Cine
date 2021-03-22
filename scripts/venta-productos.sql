CREATE TABLE IF NOT EXISTS cinema;

USE cinema;

CREATE TABLE IF NOT EXISTS ventaProducto
(
	ID_ventaP int NOT NULL AUTO_INCREMENT,
    Hora time,
    TotalVenta decimal(6.2) NOT NULL,
    TotalDulceria decimal(6,2) NOT NULL,
    TotalCafeteria decimal(6,2) NOT NULL,
    ID_usuario int,
    PRIMARY KEY(ID_ventaP),
    FOREIGN KEY (ID_usuario) REFERENCES usuarios(ID_usuario)
);
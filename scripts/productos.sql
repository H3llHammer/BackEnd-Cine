CREATE DATABASE IF NOT EXISTS cinema;

use cinema;

CREATE TABLE IF NOT EXISTS productos
(
    ID_producto int NOT NULL,
    Nombre varchar(50),
    Descripcion text,
    Stock int,
    Precio dec(6,2) NOT NULL,
    Imagen blob,
    Tipo varchar(15),
    Area varchar(20),
    PRIMARY KEY (ID_producto)
);

DESCRIBE PRODUCTOS;
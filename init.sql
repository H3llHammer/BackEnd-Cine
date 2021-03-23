CREATE DATABASE IF NOT EXISTS cinema;

use cinema;

source scripts/usuarios.sql
source scripts/venta-productos.sql;
source scripts/venta-boletos.sql

source scripts/salas.sql;
source scripts/horarios.sql;
source scripts/peliculas.sql;

source scripts/productos.sql;

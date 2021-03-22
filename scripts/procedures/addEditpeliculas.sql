use cinema
DELIMITER $$
CREATE PROCEDURE peliculasAddOrEdit
(
    IN _id int,
    IN _nombre varchar(100),
    IN _genero varchar(20),
    IN _duracion varchar(10),
    IN _sinopsis text,
    IN _actores varchar(100),
    IN _directores varchar(100),
    IN _id_sala int,
    IN _imagen blob
)
BEGIN
    IF _id = 0 THEN 
        INSERT INTO peliculas (Nombre,Genero,Duracion,Sinopsis,Actores,Directores,ID_sala,Imagen)
        VALUES (_nombre,_genero,_duracion,_sinopsis,_actores,_directores,_id_sala,_imagen);
        
        SET _id = LAST_INSERT_ID();
    ELSE
        UPDATE peliculas
        SET
            Nombre = _nombre,
            Genero = _genero,
            Duracion = _duracion,
            Sinopsis = _sinopsis,
            Actores = _actores,
            Directores = _directores,
            ID_sala = _id_sala,
            Imagen = _imagen
            WHERE ID = _id;
    END IF;
    SELECT _id AS ID;
END; 
END$$

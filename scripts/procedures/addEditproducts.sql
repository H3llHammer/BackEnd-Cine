use cinema;
DELIMITER $$
CREATE PROCEDURE productsAddOrEdit
(
    IN _id int,
    IN _nombre varchar(50),
    IN _descripcion text,
    IN _stock int,
    IN _precio dec(6,2),
    IN _imagen blob,
    IN _tipo varchar(15),
    IN _area varchar(20)
)
BEGIN
    IF _id = 0 THEN 
        INSERT INTO productos (Nombre,Descripcion,Stock,Precio,Imagen,Tipo,Area)
        VALUES (_nombre,_descripcion,_stock,_precio,_imagen,_tipo,_area);
        
        SET _id = LAST_INSERT_ID();
    ELSE
        UPDATE productos
        SET
            Nombre = _nombre,
            Descripcion = _descripcion,
            Stock = _stock,
            Precio = _precio,
            Imagen = _imagen,
            Tipo = _tipo,
            Area = _area
            WHERE ID = _id;
    END IF;
    SELECT _id AS ID;
END; 
END$$

CALL productsAddOrEdit(0,"Alitas","Alitas picantes",1000,200,"sdsdaad","Rapida","Restaurante");
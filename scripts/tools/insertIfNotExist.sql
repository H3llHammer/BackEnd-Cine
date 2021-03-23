
INSERT INTO usuarios (Nombres,Apellidos,Rol,Root,Username,Password)
SELECT * FROM (SELECT '' AS Nombres, '' AS Apellidos, '' AS Rol, false AS Root, 'hj' AS Username, 's' AS Password) AS tmp
WHERE NOT EXISTS (
    SELECT Username FROM usuarios WHERE Username = 'hj'
) LIMIT 1;




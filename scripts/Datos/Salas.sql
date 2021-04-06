INSERT INTO `cinema`.`salas`
(`Numero_asientos`,`Precio`) VALUES(100, 69.99);
INSERT INTO `cinema`.`salas`
(`Numero_asientos`,`Precio`) VALUES(100, 59.99);
INSERT INTO `cinema`.`salas`
(`Numero_asientos`,`Precio`) VALUES(100, 69.99);
INSERT INTO `cinema`.`salas`
(`Numero_asientos`,`Precio`) VALUES(100, 59.99);
INSERT INTO `cinema`.`salas`
(`Numero_asientos`,`Precio`) VALUES(100, 69.99);

SELECT `salas`.`ID_sala`,
    `salas`.`Numero_asientos`,
    `salas`.`Precio`
FROM `cinema`.`salas`;

INSERT INTO `cinema`.`horarios`
(`Hora`,`ID_sala`)VALUES("5:00:00",1);
INSERT INTO `cinema`.`horarios`
(`Hora`,`ID_sala`)VALUES("6:45:00",2);
INSERT INTO `cinema`.`horarios`
(`Hora`,`ID_sala`)VALUES("9:20:00",3);
INSERT INTO `cinema`.`horarios`
(`Hora`,`ID_sala`)VALUES("11:00:00",4);
INSERT INTO `cinema`.`horarios`
(`Hora`,`ID_sala`)VALUES("3:30:00",5);

SELECT `horarios`.`ID_horario`,
    `horarios`.`Hora`,
    `horarios`.`ID_sala`
FROM `cinema`.`horarios`;

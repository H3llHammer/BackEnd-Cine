const express = require("express");
const fs = require("fs");
const mysqlConn = require("../database");
const router = express.Router();

router.get("/", (req, res) => {
  mysqlConn.query("SELECT * FROM peliculas;", (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  mysqlConn.query(
    "SELECT * FROM peliculas WHERE id = ?",
    [id],
    (err, rows, fields) => {
      if (!err) {
        res.json(rows[0]);
      } else {
        console.log(err);
      }
    }
  );
});

router.post("/", (req, res) => {
  const { id, nombre, genero, duracion, sinopsis, actores, directores, id_sala, imagen } = req.body;
  const file = fs.readFileSync(imagen);
  const query = `
        SET @id = ?;
        SET @nombre = ?;
        SET @genero = ?;
        SET @duracion = ?;
        SET @sinopsis = ?;
        SET @actores = ?;
        SET @directores = ?;
        SET @id_sala = ?;
        SET @imagen = ?;
        CALL peliculasAddOrEdit(@id,@nombre,@genero,@duracion,@sinopsis,@actores,@directores,@id_sala,@imagen);
        `;
  mysqlConn.query(query, [id, nombre, genero, duracion, sinopsis, actores, directores, id_sala, file], (err, rows, fields) =>{
    if(!err)
    {
      res.json({Status: `Pelicula ${nombre} agregada`});
    }
    else
    {
      console.log(err);
    }
  });
});

router.delete("/:id", (req, res) =>{
  const { id } = req.params;
  mysqlConn.query('DELETE FROM peliculas WHERE id = ?', [id], (err, rows, fields) =>
  {
    if(!err)
    {
      res.json({status: `Pelicula con id ${id} eliminada`})
    }
    else
    {
      console.log(err);
    }
  });
});

module.exports = router;

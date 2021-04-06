const fs = require("fs");
const express = require("express");
const router = express.Router();

const mysqlConn = require("../database");

router.get("/", (req, res) => {
  mysqlConn.query("SELECT * FROM productos;", (err, rows, fields) => {
    if (!err) res.json(rows);
    else console.log(err);
  });
});

router.post("/add", (req, res) => {
  const { id, nombre, descripcion, stock, precio, imagen, tipo, area } = req.body;
  const file = fs.readFileSync(imagen);
  const query = `
        SET @id = ?;
        SET @nombre = ?;
        SET @descripcion = ?;
        SET @stock = ?;
        SET @precio = ?;
        SET @imagen = ?;
        SET @tipo = ?;
        SET @area = ?;
        CALL productsAddOrEdit(@id,@nombre,@descripcion,@stock,@precio,@imagen,@tipo,@area);
        `;
  mysqlConn.query(
    query,
    [id, nombre, descripcion, stock, precio, file, tipo, area],
    (err, rows, fields) => {
      if (!err) {
        res.json({ Status: `Producto ${nombre} agregado` });
      } else {
        console.log(err);
      }
    }
  );
});

router.delete("/delete/:id", (req, res) =>{
  const { id } = req.params;
  mysqlConn.query('DELETE FROM productos WHERE id = ?', [id], (err, rows, fields) =>
  {
    if(!err)
    {
      res.json({status: `producto con id ${id} eliminada`})
    }
    else
    {
      console.log(err);
    }
  });
});

module.exports = router;
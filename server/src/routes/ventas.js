const express = require("express");
const router = express.Router();
const mysqlConn = require("../database");

router.post("/productos", (req, res) => {
    const { hora, total, totalDulceria, totalCafeteria, idUsuario } = req.body;    
    mysqlConn.query("INSERT INTO ventaProducto (Hora,TotalVenta,TotalDulceria,TotalCafeteria,ID_usuario) VALUES(?,?,?,?,?);",
    [hora, total, totalDulceria, totalCafeteria, idUsuario], (err, rows, result) => {
        if (!err) res.json({ Status: `Compra registrada` });
        else  console.log(err);
    })
});

router.get("/productos", (req, res) => {
    mysqlConn.query("SELECT * FROM ventaProducto;", (err, rows, fields) => {
        if(!err) res.json(rows);
        else console.log(err);
    });
});

router.get("/productos/:id", (req, res) => {
    const { id } = req.params;
    mysqlConn.query("SELECT * FROM ventaProducto WHERE ID_usuario = ?;", [id], (err, rows, fields) => {
        if(!err) res.json(rows);
        else console.log(err);
    });
});

router.post("/boletos", (req, res) => {
    const { hora, total, totalBoletos, idUsuario } = req.body;
    mysqlConn.query("INSERT INTO ventaBoletos (Hora,TotalVenta,TotalBoletos,ID_usuario) VALUES(?,?,?,?);",
    [hora, total, totalBoletos, idUsuario], (err, rows, result) => {
        if(!err) res.json({ Status: 'Compra registrada'})
        else console.log(err);
    })
});

router.get("/boletos", (req, res) => {
    mysqlConn.query("SELECT * FROM ventaBoletos;",(err, rows, fields) => {
        if(!err) res.json(rows);
        else console.log(err);
    })
});

router.get("/boletos/:id", (req, res) => {
    const { id } = req.params;
    mysqlConn.query("SELECT * FROM ventaBoletos WHERE ID_usuario = ?;", [id] ,(err, rows, fields) => {
        if(!err) res.json(rows);
        else console.log(err);
    })
});

module.exports = router;
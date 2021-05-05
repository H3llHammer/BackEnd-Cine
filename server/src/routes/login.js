const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const mysqlConn = require("../database");
const passport = require("passport");

router.post("/login", checkNotAuthenticated, (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      throw err;
    }
    if (!user) {
      res.status(404).send("Usuario no encontrado.");
    } else {
      req.login(user, (err) => {
        if (err) throw err;
        res.status(200).send("Autenticacion satisfactoria");
      });
    }
  })(req, res, next);
});

router.post("/register", checkNotAuthenticated, async (req, res) => {
  const query =
    "INSERT INTO usuarios (Nombres,Apellidos,Rol,Root,Username,Password) SELECT * FROM (SELECT '' AS Nombres, '' AS Apellidos, '' AS Rol, false AS Root, ? AS Username, ? AS Password) AS tmp WHERE NOT EXISTS (SELECT Username FROM usuarios WHERE Username = ?)LIMIT 1";
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  mysqlConn.query(
    query,
    [req.body.username, hashedPassword, req.body.username],
    (err, rows, result) => {
      if (err) {
        res.status(500).send("Ha ocurrido un error");
        throw err;
      } else if (rows.affectedRows == 1) {
        res.status(200).send("Usuario agregado");
      } else {
        res.status(200).send("Usuario ya registrado");
      }
    }
  );
});

router.get("/", checkAuthenticated, (req, res) => {
  res.send(req.user);
});

router.delete("/logout", (req, res) => {
  req.logOut();
  res.send("/login");
});

router.get("/user", (req, res) => {
  mysqlConn.query(
    "SELECT ID_usuario, Nombres, Apellidos from usuarios WHERE Username = ?",
    [req.user.username],
    (err, rows) => {
      if (!err) res.send(rows);
      else console.log(err);
    }
  );
});

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.send("/login");
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.status(200).send(`El usuario ya inicio sesion`);
  }
  next();
}

module.exports = router;

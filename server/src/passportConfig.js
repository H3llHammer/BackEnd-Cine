const bcrypt = require("bcrypt");
const localStrategy = require("passport-local").Strategy;
const mysqlConn = require("./database");

module.exports = function (passport) {
  passport.use(
    new localStrategy(function (username, password, done) {
      mysqlConn.query(
        "select * from usuarios where Username = ?",
        [username],
        async function (err, user) {
          if (err) {
            return done(err);
          }
          if (!user[0]) {
            return done(null, false, { message: "Nombre de usuario incorrecto" });
          }
          console.log(username, password, user[0].Password, user[0].ID_usuario);
          const res = await compareAsync(
            password,
            user[0].Password,
            done,
            user[0]
          );
          /*bcrypt.compareSync(password, user[0].Password, (err, result) => {
            console.log("Espera");
            if (err) throw err;
            if (result === true) {
              return done(null, user);
            } else {
              return done(null, false);
            }
          });*/
          //return done(null, user[0]);
        }
      );
    })
  );

  function compareAsync(param1, param2, done, user) {
    return new Promise(function (resolve, reject) {
      bcrypt.compare(param1, param2, function (err, res) {
        //console.log("espera");
        if (err) throw err;
        if (res === true) {
          return done(null, user);
        } else {
          return done(null, user);
        }
      });
    });
  }

  passport.serializeUser(function (user, done) {
    done(null, user.ID_usuario);
  });

  passport.deserializeUser(function (id, done) {
    //done(null, user);
    mysqlConn.query(
      "SELECT * FROM usuarios where ID_usuario = ?",
      [id],
      (err, user) => {
        const userInformation = {
          username: user[0].Username,
        };
        //console.log(user[0].Username);
        done(null, userInformation);
      }
    );
  });
};

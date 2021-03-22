const mysql = require('mysql');

const mysqlConn = mysql.createConnection({
    host: 'localhost',
    user: 'alberto',
    password: 'Alberto_505',
    database: 'cinema',
    multipleStatements: 'true'
});

mysqlConn.connect((err) =>
{
    if(err)
    {
        console.log(err);
        return;
    }
    else
    {
        console.log('Se ha establecido la conexion con la base de datos.');
    }
});

module.exports = mysqlConn;
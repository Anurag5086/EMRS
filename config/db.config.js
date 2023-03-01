'use strict';
const mysql = require('mysql');
//local mysql db connection
const dbConn = mysql.createConnection({
  host     : 'sql12.freemysqlhosting.net',
  user     : 'sql12602086',
  password : '65dq7RkS9d',
  database : 'sql12602086'
});
dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});
module.exports = dbConn;
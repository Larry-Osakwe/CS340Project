var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'classmysql.engr.oregonstate.edu',
  user            : 'cs340_osakwel',
  password        : '5681',
  database        : 'cs340_osakwel'
});
module.exports.pool = pool;
const mysql = require('mysql');
const config = require('./mysql.json');

const conn = mysql.createConnection(config);
conn.connect();
const sql = `SELECT * FROM tigers WHERE position=? and isDeleted=0;`;
conn.query(sql, ['투수'], (err, rows, fields) => {
    if (err)
        throw err;
    for (let row of rows) {
        console.log(`${row.ID}\t${row.PLAYER}\t${row.BACKNO}\t${row.position}\t${row.isdeleted}`)
    }
});
conn.end();
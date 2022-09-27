const mysql = require('mysql');
const config = require('./mysql.json');

module.exports = {
    getConnection: function() {
        const conn = mysql.createConnection(config);
        conn.connect(err => {
            if (err) {
                console.log('mysql connection error');
                console.log(err);
            }
        });
        return conn;
    },
    getList: function(callback) {
        const conn = this.getConnection();
        const sql = `SELECT * FROM tigers WHERE isDeleted=0;`;
        conn.query(sql, (err, rows, fields) => {
            if (err)
                throw err;
            callback(rows);      
        });
        conn.end();
    },
    insertPlayer: function(params, callback) {
        const conn = this.getConnection();
        const sql = `INSERT INTO tigers (PLAYER, BACKNO, position)
                            VALUES (?, ?, ?);`;
        conn.query(sql, params, (err, fields) => {
            if (err)
                throw err;
            callback();
        });
        conn.end();
    },
    getPlayer: function(params, callback) {
        const conn = this.getConnection();
        const sql = `SELECT * FROM tigers WHERE ID=? and isDeleted=0;`;
        conn.query(sql, params, (err, rows, fields) => {
            if (err)
                throw err;
            callback(rows);    
        });
        conn.end();
    },
    updatePlayer: function(params, callback) {
        const conn = this.getConnection();
        const sql = `UPDATE tigers SET PLAYER=?, BACKNO=?, position=?
                            WHERE ID=?;`;
        conn.query(sql, params, (err, fields) => {
            if (err)
                throw err;
            callback();
        });
        conn.end();
    },
}
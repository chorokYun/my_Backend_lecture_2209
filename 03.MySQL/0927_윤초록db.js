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
        const sql = `SELECT gid, NAME AS girlGroup, DATE_FORMAT(debut, '%Y-%m-%d') AS debutDate, song.title 
                    FROM girl_group JOIN song ON girl_group.hit_song_id=song.sid;`;
        conn.query(sql, (err, rows, fields) => {
            if (err)
                throw err;
            callback(rows);      
        });
        conn.end();
    },

    songList: function(callback) {
        const conn = this.getConnection();
        const sql = `SELECT sid, title, lyrics, gg.name FROM song
            JOIN girl_group AS gg ON gg.hit_song_id=song.sid;`;
        conn.query(sql, (err, rows, fields) => {
            if (err)
                throw err;
            callback(rows);      
        });
        conn.end();
    },

    getPlayer: function(params, callback) {
        const conn = this.getConnection();
        const sql = `SELECT gid, NAME AS girlGroup, DATE_FORMAT(debut, '%Y-%m-%d') AS debutDate, song.title 
                        FROM girl_group JOIN song ON girl_group.hit_song_id=song.sid
                        WHERE gid=?;`;
        conn.query(sql, params, (err, rows, fields) => {
            if (err)
                throw err;
            callback(rows);    
        });
        conn.end();
    },

    getsong: function(params, callback) {
        const conn = this.getConnection();
        const sql = `SELECT sid, title, lyrics, gg.name FROM song
                        JOIN girl_group AS gg ON gg.hit_song_id=song.sid
                        WHERE sid=?;`;
        conn.query(sql, params, (err, rows, fields) => {
            if (err)
                throw err;
            callback(rows);    
        });
        conn.end();
    },

    insertPlayer: function(params, callback) {
        const conn = this.getConnection();
        const sql = `INSERT INTO girl_group (name, debut, hit_song_id)
                            VALUES (?, ?, ?);`;
        conn.query(sql, params, (err, fields) => {
            if (err)
                throw err;
            callback();
        });
        conn.end();
    },

    updategg: function(params, callback) {
        const conn = this.getConnection();
        const sql = `UPDATE girl_group SET name=?, debut=?, hit_song_id=? WHERE gid=?;`;
        conn.query(sql, params, (err, fields) => {
            if (err)
                throw err;
            callback();
        });
        conn.end();
    }, 

    /* getPlayer: function(params, callback) {
        const conn = this.getConnection();
        const sql = `SELECT gid, NAME AS girlGroup, DATE_FORMAT(debut, '%Y-%m-%d') AS debutDate, song.title 
        FROM girl_group JOIN song ON girl_group.hit_song_id=song.sid;`;
        conn.query(sql, params, (err, rows, fields) => {
            if (err)
                throw err;
            callback(rows);    
        });
        conn.end();
    }, */


    
    

    /* deletePlayer: function(params, callback) {
        const conn = this.getConnection();
        const sql = `UPDATE tigers SET isDeleted=1 WHERE id=?`;
        conn.query(sql, params, (err, fields) => {
            if (err)
                throw err;
            callback();
        });
        conn.end();
    }, */
}
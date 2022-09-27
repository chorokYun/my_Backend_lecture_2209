const http = require('http');
const url = require('url');
const qs = require('querystring');
const dm = require('./db-module');
const template = require('./view/template');

http.createServer((req, res) => {
    let pathname = url.parse(req.url).pathname;
    let query = url.parse(req.url, true).query;
    switch(pathname) {
    case '/':                   // 초기 홈 화면
        dm.getList(rows => {
            const trs = template.trsGen(rows);
            const html = template.home(trs);
            res.end(html);
        });
        break;
    case '/create':
        if (req.method == 'GET') {      // 입력 폼 보여주기
            let html = template.createForm();
            res.end(html);
        } else {                        // 사용자 입력 -> DB
            let body = '';
            req.on('data', data => {
                body += data;
            });
            req.on('end', () => {
                const param = qs.parse(body);
                const PLAYER = param.PLAYER;
                const BACKNO = parseInt(param.BACKNO);
                const position = param.position;

                dm.insertPlayer([PLAYER, BACKNO, position], () => {
                    res.writeHead(302, {'Location': '/'});
                    res.end();
                });
            });
        }
        break;   
    case '/update':
        if (req.method == 'GET') {              // 수정입력할 폼 보여주기
            const ID = parseInt(query.ID);
            dm.getPlayer(ID, rows => {
                const PLAYER = rows[0].PLAYER;
                const BACKNO = rows[0].BACKNO;
                const position = rows[0].position;
                const html = template.updateForm(ID, PLAYER, BACKNO, position);
                res.end(html);
            });
        } else {                                // DB에 수정하기
            let body = '';
            req.on('data', data => {
                body += data;
            });
            req.on('end', () => {
                const param = qs.parse(body);
                const ID = parseInt(param.ID);
                const PLAYER = param.PLAYER;
                const BACKNO = parseInt(param.BACKNO);
                const position = param.position;

                dm.updatePlayer([PLAYER, BACKNO, position, ID], () => {
                    res.writeHead(302, {'Location': '/'});
                    res.end();
                });
            });
        }
        break;
    /* case '/delete':
        const did = parseInt(query.id);
        const html = template.deleteForm(did);
        res.end(html);
        break;
    case '/deleteConfirm': {
        const id = parseInt(query.id);
        const sql = `UPDATE tigers SET isDeleted=1 WHERE id=?`;
        const conn = mysql.createConnection(config);
        conn.connect();
        conn.query(sql, id, (err, fields) => {
            if (err)
                throw err;
            res.writeHead(302, {'Location': '/'});
            res.end();
        });
        conn.end();
        break;
        } */
    default:
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end();        
    }
}).listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
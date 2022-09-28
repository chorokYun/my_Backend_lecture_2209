const dm = require('./0927_윤초록db');

// 1. 걸그룹 리스트 조회
dm.getList(rows => {
    for (let row of rows) {
        console.log(row.gid, row.girlGroup, row.debutDate, row.title);
    }
});

// 2. 송 리스트 조회
dm.songList(rows => {
    for (let row of rows) {
        console.log(row.sid, row.title, row.lyrics, row.name);
    }
});

// 3. 걸그룹 검색(gid)
dm.getPlayer(7, rows => {
    for (let row of rows) {
        console.log(row.gid, row.girlGroup, row.debutDate, row.title);
    }
});

// 4. 송 검색(sid)
dm.getsong(103, rows => {
    for (let row of rows) {
        console.log(row.sid, row.title, row.lyrics, row.name);
    }
});

// 5. 걸그룹추가
dm.insertPlayer(['EXID',2012-07-30, 10], () => {
    dm.getList(rows => {
        for (let row of rows) {
            console.log(row.id, row.player, row.backNo, row.position);
        }
    });
}); 


// 6. 걸그룹 수정
dm.updategg(['EXID',2012-08-30, 10, 13], () => {
    dm.getPlayer(13, rows => {
        for (let row of rows) {
            console.log(row.gid, row.girlGroup, row.debutDate, row.title);
        }
    });
});

// 7. 걸그룹 삭제
/* dm.deletePlayer(16, () => {
    dm.getList(rows => {
        for (let row of rows) {
            console.log(row.id, row.player, row.backNo, row.position);
        }
    });    
}); */

// 8. 송 추가

// 9. 송 수정

// 10. 송 삭제

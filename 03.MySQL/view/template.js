module.exports = {
    home: function(trs) {
        return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>기아 타이거즈</title>
            <style>
                th, tr { text-align: center }
            </style>
        </head>
        <body style="margin: 50px;">
            <h1>기아 타이거즈 선수단</h1>
            <button onclick="location.href='/create'">추가</button>
            <hr>
            <table>
                <tr>
                    <th>ID</th>
                    <th>선수명</th>
                    <th>백넘버</th>
                    <th>포지션</th>
                    <th>액션</th>
                </tr>
                ${trs}
            </table>
        </body>
        </html>
        `;
    },

    trsGen: function(rows) {
        let trs = '';
        for (let row of rows) {
            trs += '<tr>';
            trs += `<td>${row.ID}</td><td>${row.PLAYER}</td>`;
            trs += `<td>${row.BACKNO}</td><td>${row.position}</td>`;
            trs += `<td><a href="/update?ID=${row.ID}">수정</a>, 
                        <a href="/delete?ID=${row.ID}">삭제</a></td>`;
            trs += '</tr>';
        }
        return trs;
    },

    createForm: function() {
        return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>기아 타이거즈</title>
            <style>
                th, tr { text-align: center }
            </style>
        </head>
        <body style="margin: 50px;">
            <h1>기아 타이거즈 선수단</h1>
            <button onclick="location.href='/'">홈으로</button>
            <hr>
            <form action="/create" method="post">
                <table>
                    <tr>
                        <td>선수명</td><td><input type="text" name="PLAYER"></td>
                    </tr>
                    <tr>
                        <td>백넘버</td><td><input type="text" name="BACKNO"></td>
                    </tr>
                    <tr>
                        <td>포지션</td><td><input type="text" name="position"></td>
                    </tr>
                    <tr>
                        <td colspan="2"><input type="submit" value="추가"></td>
                    </tr>
                </table>
            </form>
        </body>
        </html>
        `;
    },

    updateForm: function(ID, PLAYER, BACKNO, position) {
        return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>기아 타이거즈</title>
            <style>
                th, tr { text-align: center }
            </style>
        </head>
        <body style="margin: 50px;">
            <h1>기아 타이거즈 선수단</h1>
            <button onclick="location.href='/'">홈으로</button>
            <hr>
            <form action="/update" method="post">
                <input type="hidden" name="ID" value="${ID}">
                <table>
                    <tr>
                        <td>선수명</td><td><input type="text" name="PLAYER" value="${PLAYER}"></td>
                    </tr>
                    <tr>
                        <td>백넘버</td><td><input type="text" name="BACKNO" value="${BACKNO}"></td>
                    </tr>
                    <tr>
                        <td>포지션</td><td><input type="text" name="position" value="${position}"></td>
                    </tr>
                    <tr>
                        <td colspan="2"><input type="submit" value="수정"></td>
                    </tr>
                </table>
            </form>
        </body>
        </html>
        `;
    },
    deleteForm: function(ID) {
        return `
        <!DOCTYPE html>
        <html lang="ko">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <script>
                let answer = confirm('정말로 삭제하시겠습니까?');
                if (answer)
                    location.href = '/deleteConfirm?ID=${ID}';
                else
                    location.href = '/';
            </script>
        </body>
        </html>
        `;
    }
}
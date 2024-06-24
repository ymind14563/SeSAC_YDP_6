// app.js : Router를 불러오는 부분
// routes/index.js : controller와 연결
// Controller/Cmain.js
// model/Comments.js

const express = require(`express`);
const app = express();
const PORT = 8000;

app.set(`view engine`, `ejs`);
app.set(`views`, `./views`);

const indexRouter = require(`./routes/index`); // ./routes/index 가 정석이나 index파일명이 그 폴더의 대표파일이기에 생략해도 index파일을 찾는다.
app.use(`/`, indexRouter); // `/` 로 들어올때마다 indexRouter를 불러오게 함.
// -> 기본 요청 주소 : "localhost:PORT"

const userRouter = require(`./routes/user`);
app.use(`/user`, userRouter);
// -> 기본 요청 주소 : "localhost:PORT/user"

// 404 맨 마지막 라우트(주소)로 선언 해야한다 !!
// : 그렇지 않고 맨 위에 작성하면 `*`이기에 나머지 라우팅(주소를 설계한 행위)이 전부 무시됨 !!)
app.get('*', (req, res) => {
    res.render(`404`);
})


app.listen(PORT, () => {
    console.log(`${PORT} 서버 연결 성공`);
})
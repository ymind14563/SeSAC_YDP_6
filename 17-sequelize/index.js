const express = require(`express`);
const app = express();
const PORT = 8000;
const router = require(`./routes/index`);
const playerRouter = require(`./routes/player`);
const teamRouter = require(`./routes/team`);
const { sequelize } = require(`./models/index`); // index가 기본값이므로 생략가능

app.set(`view engine`, `ejs`);
app.set(`views`, `./views`);
app.use(express.urlencoded({ extended : true }));
app.use(express.json());

app.use(`/`, router);
app.use(`/players`, playerRouter);
app.use(`/teams`, teamRouter);



sequelize
    // force : true ; 서버 실행할 때마다 테이블 재생성
    // force : false ; 서버 실행 시 테이블이 없으면 생성 
    .sync({ force : false }) // 값을 insert 할 것이기에 true에서 false로 수정함. // 관계 설정하여 다시 true로 설정.
    .then(() => {
        app.listen(PORT, () => console.log(`${PORT}에 연결됨`), console.log(`Database connection succeeded!`));
    })
    .catch((err) => {
        console.error(err);
    });



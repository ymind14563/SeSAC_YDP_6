const express = require(`express`);
const app = express();
const PORT = 8000;
const router = require(`./routes/index`);
const { sequelize } = require(`./models`);

app.set(`view engine`, `ejs`);
app.set(`views`, `./views`);
app.use(express.urlencoded({ extended : true }));
app.use(express.json());

app.use(`/`, router);




sequelize
    // force : true ; 서버 실행할 때마다 테이블 재생성
    // force : false ; 서버 실행 시 테이블이 없으면 생성 
    .sync({ force : true })
    .then(() => {
        app.listen(PORT, () => console.log(`${PORT}에 연결됨`), console.log(`Database connection succeeded!`));
    })
    .catch((err) => {
        console.error(err);
    });



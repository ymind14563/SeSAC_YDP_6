const express = require(`express`);
const app = express();
const PORT = 8000;

app.set(`view engine`, `ejs`);
app.set(`views`, `./views`);

// 브라우저에 처음 접속했을 때
app.get(`/`, (req, res) => {
    res.render(`index`, {title : `홈`});
})

// about 에 접속
app.get(`/about`, (req, res) => {
    res.render(`about`, {title : `소개`});
})

// create 에 접속
app.get(`/create`, (req, res) => {
    res.render(`create`, {title : `작성`});
})


app.listen(PORT, () => {
    console.log(`${PORT}번 실행완료`);
})
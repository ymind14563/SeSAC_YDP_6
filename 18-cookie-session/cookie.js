const express = require(`express`);
const cookieParser = require(`cookie-parser`);
const path = require(`path`);
const dotenv = require(`dotenv`);
const app = express();

app.set(`view engine`, `ejs`);
app.set(`./views`, `./views`);

// console.log("COOKIE_SECRET:", process.env.COOKIE_SECRET);

// 환경변수: 상단에 위치해야 아래 코드에서 process.env를 정상적으로 불러올 수 있다. (뒤에 위치하면 undefined가 뜸)
dotenv.config({
    path: path.resolve(__dirname, `.env`)
});

const port = process.env.PORT; // 환경변수보다 위에 위치하면 undefined 뜬다.


// cookie-parser 미들웨어
// : 요청에 실려온 쿠키를 해석해서 req.cookies 객체로 만듦

// cookieParser(secretKey, optionObj)
// - secretKey: 비밀키
//      - 비밀키의 값을 통해 해당 쿠키가 이서버가 만든 쿠키임을 검증
//      - 쿠키는 클라이언트에 저장되는 정보이다보니 위조가 쉬워서 비밀키를 통해 만든 서명을 쿠키 뒤에 붙임
// - optionObj: 쿠키에 사용되는 옵션


// // ver1. 평문 쿠기 (ex) myValueTest)
// app.use(cookieParser());
// const cookieConfig = {
//     httpOnly: true, 
//     maxAge: 60 * 1000,


// ver2. 서명 쿠키 (ex) s%3AmyValueTest.hJ%2B5zrjA0i%2BCMvWo8bV5ldOFBkahM3DUIlM99CDAM88) 
// s%3쿠키값.임의문자열 로 구성됨.
// s%3: 접두사(해당 쿠키값 자체가 서명됨을 알려주는 접두사) 
// -> 서명된 쿠키/평문 쿠키를 구별
// -> 클라이언트가 임의로 서명된 쿠키를 만들거나 조작할 수 없도록 함이 목적

/*
1. 서버가 "서명된 쿠키"를 받으면, "s%3A"를 보고 서명된 쿠키임을 인식
2. 서버의 비밀키(process.env.COOKIE_SECRET)를 사용해 다시 서명하고 받은 서명이랑 비교
3. 두 값이 일치하면 쿠키가 변조되지 않았음을 신뢰하고 사용함.
*/
app.use(cookieParser(process.env.COOKIE_SECRET));
const cookieConfig = {
    httpOnly: true, // 웹 서버를 통해서만 쿠키에 접근 가능 -> front js에서 document.cookie로 접근 차단
    maxAge: 60 * 1000, // 쿠키 수명 (단위: ms)
    // expires: 만료 날짜/시간 지정 가능 (상대 절대 차이)
    signed: true, // 쿠키 암호화 (req.signedCookies)
    // secure: 웹 브라우저와 웹 서버가 https 프로토콜로 통신하는 경우에만 쿠키를 서버에 전송
}


app.get(`/`, (req, res) => {
    res.render(`cookie`); // 서버가 클라이언트한테 응답을 "함"
});

app.get(`/setCookie`, (req, res) => {
    //res.cookie(키, 값, 옵션)
    // : 쿠키를 설정하는 메서드 // 서버가 클라이언트한테 응답하는 게 아니라 "쿠키를 설정" (응답하기 전인 상태)
    res.cookie(`myKeyTest`, `myValueTest`, cookieConfig);

    res.send(`Set signed cookie!`) // 클라이언트한테 응답!
})


app.get(`/getCookie`, (req, res) => {
    // req.signedCookies
    // : cookie-parser가 만든 요청의 서명된 쿠키 해석
    res.send(req.signedCookies);
})

app.get(`/clearCookie`, (req, res) => {
    // res.clearCookie(키, 값, 옵션)
    // : 쿠키를 삭제하는 메서드 (서버가 클라이언트에 응답하는 것이 아님)
    // : 쿠키를 생성할 때의 키, 값, 옵션이 일치해야 함! (단, maxAge/expires 키는 일치할 필요 없음)
    res.clearCookie(`myKeyTest`, `myValueTest`, cookieConfig);

    res.send(`Deleted signed cookie!`);
})

app.listen(port, () => {
    console.log(`${port} 연결 성공`);
    console.log(`쿠키 비밀키 :`, process.env.COOKIE_SECRET);
})

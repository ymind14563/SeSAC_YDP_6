// 쿠키 vs. 세션
// - 비슷한 역할, 동작원리 유사 (세션도 어쨌든 쿠키 기반!)
// - 쿠키: 서버의 자원을 사용하지 않고
// - 세션: 서버의 자원을 사용
// - 보안: 세션 > 쿠키
// 	쿠키는 로컬 제정 -> 변조될 가능성 존재
// 	세션은 session-id 만 저장하고 나머지는 서버에서 처리 "비교적" 안전
// - 세션 만료기간 설정할 수 있으나, 브라우저가 종료되면(=/= 탭을 닫는 것) 만료기간과 상관없이 삭제됨
// - 속도: 쿠키 > 

// 일반적으로 `오늘 그만 보기, 아이디 기억하기` 등이 `쿠키`로 많이 쓰이고
// `로그인 며칠 동안 유지` 등의 기능은 `세션`으로 많이 사용됨

const express = require('express');
const session = require('express-session');
const dotenv = require('dotenv');
const path = require('path');
const app = express();

// 환경변수: 상단에 위치해야 아래 코드에서 process.env를 정상적으로 불러올 수 있다. (뒤에 위치하면 undefined가 뜸)
dotenv.config({
    path: path.resolve(__dirname, '.env'),
}); 

const port = process.env.PORT; 

app.set('view engine', 'ejs');
app.set('views', './views');


// express-session 미들웨어
// : 세션 관리
// ex. 로그인 등 세션을 구현하거나 특정 클라이언트에 대한 데이터를 저장할 때 사용
// -> 사용자 별로 req.session 객체 안에 유지
// 인자로 세션에 대한 설정 객체를 넣음

/*
1. 서버가 웹 브라우저(클라이언트)한테 세션 값을 보낸다. (sid: 서버가 클라이언트를 구별할 수 있는 식별자)
2. 클라이언트는 요청마다 자신이 갖는 sid 서버한테 전달
3. 서버는 클라이언트의 sid(req.sessionID) 가지고 유저의 데이터를 구별 가능
*/

app.use(session({
    secret: process.env.COOKIE_SECRET,  // 필수 옵션, 세션 암호화하는데 쓰는 키
    resave: false, // 세션이 변경되지 않더라도 매번 다시 저장할 건지를 설정
    saveUninitialized: false, // 세션을 초기값이 지정되지 않은 상태에서도 처음부터 세션을 생성할 건지 

    // 세션 쿠키 설정 (세션관리할 때 클라이언트로 보내는 쿠키)
    cookie: {
        httpOnly: true, // 클라이언트에서 쿠키확인 안함.
        secure: false, // http에서 사용 가능 하도록 (true라면 https에서만 가능)
        maxAge: 60 * 1000, // 단위 (ms)
        // expires: 만료 기간 설정
    }
}))


// 세션:
// 1. 세션 사용: req.session.키
// 2. 세션 설정: req.session.키 = 값
// 3. 세션 삭제: req.destroy(콜백)
app.get('/', (req, res) => {
    res.render('session');
})

// 세션 설정
// req.session.키 = 값;
app.get('/set', (req, res) => {

    // console.log(req.query) // {}, {name: x, age: y}
    if (req.query.name) {
        req.session.name = req.query.name;
        req.session.age = req.query.age;
    } else {
        req.session.name = '바나나';
        req.session.age = 10;
    }

    
    res.send('세션 설정 완료!'); // { [sid]: { name: '바나나', age: 10 }, [sid2]: { name: '바나나', age: 10 }}
})


// 세션 사용(조회)
// req.session.키
app.get('/name', (req, res) => {

    console.log('req.session >> ', req.session);
    // Session {
    //     cookie: { path: '/', _expires: null, originalMaxAge: null, httpOnly: true },
    //     name: '바나나',
    //     age: 10
    //   }
    res.send({ id: req.sessionID, name: req.session.name });
})

// 세션 삭제
// req.session.destroy(세션 삭제 시 호출할 콜백 함수)
app.get(`/destroy`, (req, res) => {

    req.session.destroy((err) => {
        if(err) throw err;
        // res.send(`세션 삭제 완료!`)
        res.redirect(`/name`); // 경로 변경
    })
})

app.listen(port, () => {
    console.log(`${port} 연결 성공`);
});


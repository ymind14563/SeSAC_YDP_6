const express = require('express');
const jwt = require('jsonwebtoken');
const session = require('express-session'); // 세션 미들웨어
const app = express();
const PORT = 8000;
const SECRET = 'wDwbC5fWT3sa5yk8v2FnMCiLYsALzNbD';

// 임시 DB
const userInfo = { id: 'sesac', pw: '1234', name: "Admin"};

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended : true }));
app.use(express.json());

// 세션 설정
app.use(
    session({
        secret: SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            httpOnly: true,
            secure: false,
            maxAge: 5 * 1000
        }
    })
);

// 메인 페이지 (세션 기반 검증)
app.get('/', (req, res) => {
    if (req.session.user) {
        const token = req.session.user.token;
        console.log('token >>>>> ', token);

        try {
            // JWT 토큰 검증
            const result = jwt.verify(token, SECRET);
            console.log('result >>>>> ', result);

            if (result.id === userInfo.id) {
                // 검증 성공 시 사용자 정보 출력
                res.render('index2', { name: req.session.user.name })
            } else {
                // 검증 실패
                res.redirect('/login');
            }
        } catch (error) {
            console.error('인증된 회원이 아닙니다.', error);
        }
    } else {
        res.redirect('/login');
    }
});

app.get('/login', (req, res) => {
    res.render('login')
});

// 로그인 처리
app.post('/login', (req, res) => {
    try {
        const { id, pw } = req.body; // 유저가 입력한 정보
        const { id: userId, pw: userPw } = userInfo; // 유저의 DB 정보

        if (id === userId && pw === userPw) {
            // 로그인 성공 - 토큰 생성
            const token = jwt.sign({ id }, SECRET);
            console.log('token >>>>> ', token);

            // 세션에 사용자 정보를 저장
            req.session.user = { id, name: userInfo.name, token };
            res.json({ result: true, token })
        } else {
            // 로그인 실패 응답
            res.json({
                result: false,
                message: '로그인 정보가 올바르지 않습니다.(세션)'
            });
        }
    } catch (error) {
        console.log('인증된 회원이 아닙니다.', error);
    }
});

app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/login');
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});




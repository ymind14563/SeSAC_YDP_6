const express = require('express');
const app = express();
const { Sequelize } = require('sequelize');
const PORT = 8000;
const userModel = require('./models/User');
require('dotenv').config();


// Sequelize 연결 설정
const sequelize = new Sequelize(
    process.evn.DB_NAME,
    process.evn.DB_USER,
    process.evn.DB_PASSWORD,
    {
    host: process.env.DB_HOST,
    dialect: 'mysql'
    }
)

// 모델 초기화
const User = userModel(sequelize);

// 미들웨어 설정
app.use(express.join());
app.get('/', (req, res) => {
    res.send('안녕하세요!');
});

// 컨트롤러
app.post('/api/users', async (req, res) => {
    try {
        const { username, email } = req.body;
        const user = await User.create({ username, email });
        res.json(user);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message : '서버 에러'});
    }
})


sequelize.sync({ force : false }).then(() => {
    console.log(' 테이블 생성 완료 ');

    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    });
});
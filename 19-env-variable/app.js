// const ps = process.env;
// console.log(ps);

const express = require(`express`);
const path = require(`path`);
const dotenv = require(`dotenv`);
const app = express();

// dotenv 모듈을 이용해서 .env 파일의 환경 변수를 불러옴
dotenv.config({
    // 기본 .env 파일을 로드
    path: path.resolve(__dirname, `.env`)
});

dotenv.config({
    // NODE_ENV에 따라서 적절한 .env 파일을 로드(.env.development, .env.production)
    path: path.resolve(__dirname, `.env.${process.env.NODE_ENV}`),
    override: true // 오버라이드 설정 (덮어쓰기)
});


// process.env 객체를 통해 환경 변수에 접근
const port = process.env.PORT || 5000;
const dbName = process.env.DATABASE_NAME;
const dbPW = process.env.DATABASE_PW;

app.listen(port, () => {
    console.log(`${port}에 성공적으로 연결됨.`)
    console.log(`Database 이름은 ${dbName}, 패스워드는 ${dbPW}`);
})


// 개발 환경: 개발자가 기획자/디자이너의 요청에 의해 추가 기능 개발하거나 버그를 수정하는 환경의 서버
// > 임시 데이터
// 테스트 환경: 배포 직전에 기능 테스트할 수 있는 서버
// > 임시 데이터 + 실제 유저 데이터의 복제본
// 배포 환경: 실제 운용중인 사이트의 서버
// > 배포 환경의 데이터들을 안전하게 보존
const express = require(`express`);
const app = express();
const multer = require(`multer`); // multer 모듈 불러오기
const path = require(`path`)// path 모듈 불러오기

const PORT = 8080;


app.set(`view engine`, `ejs`);
app.set(`views`, `./views`);

app.use(express.urlencoded({extended : true}));
app.use(express.json());


// 참고: multer 최신버전(1.4.5-LTS.1 버전이 한글 관련 버그가 존재하여 1.4.4로 재설치함)

// multer 미들웨어 등록
app.use(`/uploads`, express.static(__dirname + `/uploads`));

// app.use(`/images`, express.static(__dirname + `/uploads`));
// __dirname + `/uploads`에 uploads 는 파일경로이므로 변경하면 안되지만,
// app.use(`/images`, ..) 에서 `/image`는 변경해도 된다. 
// 하지만 localhost:8080/image/사진명으로 접속 시 image도 변경해줘야 사진이 정상적으로 보인다.


// const upload = multer({
//     dest: `uploads/`,
// });
const uploadDetail = multer({
    storage : multer.diskStorage({
        destination(req, file, done) {
            done(null, `uploads/`); // 파일 저장할 경로
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname);
            done(null, path.basename(file.originalname, ext) + Date.now() + ext); // 저장할 파일명
        }
    }),
    limits : { fileSize : 5 * 1024 * 1024 } // 업로드 크기 제한
})


// multer객체.single(): 하나의 파일을 업로드
// - single 미들웨어는 라우터 미들웨어 앞에 넣으면 됨
// - multer 객체 생성시 작성한 옵션에 따라 파일 업로드 후, req.file 객체 생성
app.post("/upload", uploadDetail.single('userfile'), (req, res) => {
    console.log(req.body); // { title: '바탕화면 사진임' }
    console.log(req.file); // 업로드된 파일 정보
    // {
    //     fieldname: 'userfile',
    //     originalname: '6ì\x9B\x94 ì\x9B\x94í\x8E\x98ì\x9D´í\x8D¼.png',
    //     encoding: '7bit',
    //     mimetype: 'image/png',
    //     destination: 'uploads/',
    //     filename: '9a4440e4b1c09a6271a1027abdd64030.png',  path: 'uploads\9a4440e4b1c09a6271a1027abdd64030.png',
    //     size: 3358858
    //   }


    // res.send('Success upload!');
    res.render(`uploaded`, { title : req.body.title, scr: req.file.path }); 
    // 만약 app.use(`/images`, express.static(__dirname + `/uploads`)); 로 /images 로 바꾼다면 
    // path에는 uploads가 이미 있으므로 .filename 으로 바꾸고 ejs에서 <img src="/images/<%= scr %>"> 로 바꿔야 정상작동한다.


    // 파일 탐색기 > uploads 폴더가 생성!
    // 확장자 없이 파일명이 자동으로 저장됨 (multer 객체를 생성할 때 dest 옵션 외에 설정을 한 게 없어서)
    // 파일 탐색기에서 png, jpg 등의 확장자를 붙여보면 우리가 업로드한 파일임이 확인 됨!
});

// multer객체.array(): 여러 파일을 하나의 인풋에 업로드
app.post(`/upload/array`, uploadDetail.array(`userfiles`), (req, res) => { // form:action 경로 일치, input:name값 일치 입력
    console.log(req.body);
    console.log(req.files); // [ {}, {}, ... ] 배열형태로 각 파일 정보를 저장

    res.send(`Success Upload!! (multiple)`);
})

// multer객체.fields(): 여러 파일을 각각의 인풋에 업로드
app.post(`/upload/fields`, uploadDetail.fields([{name : `kiwi`}, {name : `orange`}, {name : `banana`}]), (req, res) => {
    console.log(req.body);
    console.log(req.files); // { kiwi: [{}, ...], orange : [{}, ...], banana [{}, ...]}

    res.send(`Success Upload!! (multiple2)`);
})

app.get(`/`, (req, res) => {
    res.render(`index`, {title : `파일 업로드를 배워보자`});
})

app.listen(PORT, () => {
    console.log(`${PORT} 서버로 연결 성공`);
})

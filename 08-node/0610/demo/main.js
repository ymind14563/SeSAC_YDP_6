// /**
//  * url 모듈은 웹주소를 읽어온다. 읽어온 내용을 구문분석(parse)하며 주소의 각 부분으로 나누고 객체로 변환한다.
//  */

// var addr = `http://localhost:8000/example.html?year=2024&month=feb`;
// // 로그인 id = 000, password = 000
// // ?year=2024&month=feb : qurrey
// var q = url.parse(addr, true);
// console.log(q);
// console.log(`-----------------`);
// console.log(q.pathname); // 경로와 파일 이름 = /example.html
// console.log(q.search); // ?year=2024&month=feb
// console.log(`-----------------`);
// var qdata = q.query; // { year: '2024', month: 'feb' }
// console.log(qdata);
// console.log(`-----------------`);
// console.log(qdata.month); // 기존쿼리에서 month에 해당하는 것만 출력 = feb
// console.log(qdata.year);

// var addr = `http://localhost:8000/demo.html?id=abc&pw=123`;
// var q = url.parse(addr, true);
// console.log(q);
// console.log(`-----------------`);
// console.log(q.pathname); // 경로와 파일 이름 = /demo.html
// console.log(q.search); // ?id=abc&pw=123
// console.log(`-----------------`);
// var qdata = q.query; // { id: 'abc', pw: '123' }
// console.log(qdata);
// console.log(`-----------------`);
// console.log(qdata.id); // abc
// console.log(qdata.pw); // 123


const http = require(`http`);
const url = require(`url`);
const fs = require(`fs`);

http.createServer(function(req, res){ // req = summer.html
    var q = url.parse(req.url, true); // req.url = /summer.html
    // true로 설정하면 쿼리 문자열이 파싱된 결과가 객체로 반환. 문자열의 각 매개변수와 그 값을 속성으로 가지게 됨.
    var filename = `.` + q.pathname; // ./summer.html = `.` + /summer.html

    fs.readFile(filename, function(err, data){ // 파일읽기(./summer.html, 함수(에러, 파일데이터)
        if(err) {
            res.writeHead(404, {'Content-Type' : 'text/html'}) // 개발자도구 Network에 404 출력
            return res.end(`404 Not found`) // 본문에 `404 Not found` 출력
        }
        res.writeHead(200, {'Content-Type' : 'text/html'}) // 개발자도구 Network에 200 출력
        res.write(data); //  res에 파일내용(summer.html의 내용) 입력
        return res.end; // res의 내용, 본문에 출력
    })
    console.log(`파일 읽기 성공`);

}).listen(8000, () => {
    console.log(`8000 서버 실행`);
})

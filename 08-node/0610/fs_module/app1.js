// 디렉토리 읽기
const fs = require(`fs`);
fs.readdir(`./`, function(err, files) {
    if(err) console.log(`에러`,err);
    else console.log(`결과는`, files);
});

// 파일 생성
fs.writeFile(`mynewfile1.txt`, `Hello world`, function(err) {
    if(err) throw err;
    console.log(`파일이 생성됨.`);
});

// 파일 생성 : open(), w를 이용
// w 의 의미 : 파일을 쓰기 모드로 열 때 사용되는 옵션.
// 해당 파일이 이미 존재하면 내용을 덮어쓰고, 파일이 없으면 새로 생성됨
fs.open(`mynewfile2.txt`, `w`, function(err, file){
    if(err) throw err;
    console.log(`파일이 생성됨.`);
});

// 파일 생성 : appendFile() 추가, 기존파일을 전제, 
// mynewfile1.txt에 `Kim` 내용이 추가됨.
fs.appendFile(`mynewfile1.txt`, `Kim`, function(err) {
    if(err) throw err;
    console.log(`파일이 생성됨.`);
})
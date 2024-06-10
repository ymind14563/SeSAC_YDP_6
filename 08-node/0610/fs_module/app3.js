// 파일 읽기
const fs = require(`fs`);
// fs.readFile(`./input.txt`,'utf-8', function(err, data) {
//     if(err) throw err;
//     console.log(data);
// })
// console.log(`파일 읽기 완료`);

// // 파일 읽기
// fs.readFile(`./input.txt`, function(err, data) {
//     if(err) throw err;
//     console.log(data);
// })
// console.log(`파일 읽기 완료`);



const data = fs.readFileSync(`./input.txt`,'utf-8') // 비동기를 동기로 sync
console.log(data);
console.log(`파일 읽기 완료`);


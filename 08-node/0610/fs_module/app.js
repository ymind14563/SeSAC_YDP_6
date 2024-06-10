const fs = require(`fs`);
// console.log(fs);

// fs.mkdir(path, module, callback);
const path = require(`path`);

// 1. 디렉토리 생성
// fs.mkdir(path.join(__dirname, `test`), (err) => {
//     if(err) {
//         return console.error(err);
//     }
//     console.log(`디렉토리 생성완료`);
//     });


// 2. 디렉토리 삭제
fs.rmdir(path.join(__dirname, `test`), (err) => {
    if(err) {
        return console.error(err);
    }
    console.log(`디렉토리 삭제완료`);
    });

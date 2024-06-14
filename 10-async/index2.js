// Promise (프로미스) 객체
// - 비동기처리하기 위한 첫번째 방법이 콜백함수인데, 콜백 지옥이라는 치명적인 단점이 있음.
//  이 단점을 해결하기 위해 es6(ECMAScript6)부터 등장한 문법 (2015년)
// - 미래에 실패 / 성공에 대한 결과값을 "약속" 한다는 의미를 가지고 있음.
// - 어떤 작업에 대해 성공, 실패 분리해서 반환
//  성공은 then으로 실패는 catch 메서드로 이어서 받음

// => 성공이든 실패든 무언가의 "최종 결과"
// resolved: 성공
// rejected: 실패

// 1. promise를 생성하는 코드 "제작 코드(Producing code)"
// function promise1(flag) {
//     // 프로미스 객체를 반환
//     // - new 연산자를 이용해서 프로미스 객체를 만들고 바로 반환
 
//     // 실행함수(excutor)가 두 개의 콜백함수(resolve, reject)를 받음.
//     return new Promise(
//         function (resolve, reject) {
//             if(flag) {
//                 resolve(`프로미스 이행(fulfilled) 상태! 성공! ${flag}`);
//             } else {
//                 reject(`프로미스 거절(rejected) 상태.. 실패.. ${flag}`);
//             }
//         }
//     );
// }


// 2. promise를 소비하는 코드 "소비 코드(Consuming code"

// promise1(5 > 3)
//     .then(function(result) {
//         console.log(result); // 프로미스 이행(fulfilled) 상태! 성공! true
//     })
//     .catch(function(err) {
//         console.log(err);
//     })

// promise1(5 > 3)
//     .then((result) => console.log(result)) // 프로미스 이행(fulfilled) 상태! 성공! true
//     .catch((err) => console.log(err));


// --------------------------------
// index.js 에서 콜백함수를 사용해 작성한 코드를 promise로 바꿔보자 !
// let product, price;
// function goMart () {
//     console.log(`마트에 가서 어떤 음료를 살지 고민한다..`);
// }

// function pickDrink() {

//     return new Promise (function (res, rej) {
//         setTimeout(function(){
//             console.log(`고민 끝`);
//             product = `제로콜라`;
//             price = 3000;
//             // res();

//             if(price <= 4000) {
//                 res();
//             } else {
//                 rej();
//             }
//         }, 3000);
//     }) 
// }


// function pay() {
//     console.log(`상품명: ${product} // 가격: ${price}`);
// }

// function nopay() {
//     console.log(`잔액이 부족합니다.`);
// }

// goMart();
// pickDrink().then(pay).catch(nopay);

// --------------------------------
// 프로미스 체이닝 (Promise Chaining)
// 목표 : 함수를 이용해 (4 + 3) * 2 - 1 을 연산해보자

// => sub(mul(add(4, 3), 2), 1) : add -> mul -> sub

// i) 콜백함수를 이용해 처리한 경우
// function add(n1, n2, callback) {
//     setTimeout(function () {
//         const result = n1 + n2;
//         callback(result);
//     }, 1000);
// }

// function mul(n, callback) {
//     setTimeout(function () {
//         const result = n * 2;
//         callback(result);
//     }, 700);
// }

// function sub(n, callback) {
//     setTimeout(function () {
//         const result = n - 1;
//         callback(result);
//     }, 500);
// }

// add(4, 3, function(x){
//     console.log(x);

//     mul(x, function(y) {
//         console.log(y);

//         sub(y, function(z) {
//             console.log(z);
//         })
//     })
// });

// ii) 프로미스 체이닝을 이용해 처리한 경우

function add(n1, n2) {
    return new Promise(function(res, rej)  {
        setTimeout(function () {
            const result = n1 + n2; // 7
            res(result); // resolve(7)
        }, 1000);
    })
    
}

function mul(n) {
    return new Promise(function(res, rej)  {
      setTimeout(function () {
            const result = n * 2; // 14
            // res(result); // resolve(7)
            rej(new Error(`의도적으로 발생시킨 에러`));
        }, 700);
    })
}

function sub(n) {
    return new Promise(function(res, rej){
        setTimeout(function () {
            const result = n - 1; // 13
            res(result); // resolve(13)
        }, 500);
    })
   
}

add(4, 3)
    .then(function(result) { // 7
        console.log(result); // 7

        return mul(result); // return mul(7)
    })
    .then(function(result) { // 14
        console.log(result); // 14

        return sub(result); // return sub(14)
    })
    .then(function(result) { // 13
        console.log(result); // 13
    })
    
    .catch(function(err) {
        console.log(err);
    })
    
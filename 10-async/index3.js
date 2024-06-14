// 비동기처리의 3번째 방법: async와 await

// async 키워드: 함수 앞에 작성
// => async를 붙이는 순간 해당 함수는 프로미스가 아닌 값을 반환하더라도 프로미스로 감싸서 반환

// async function f1() {
//     return 1;
// }
// async function f2() {
//     return Promise.resolve(1);
// }

// // 화살표 함수에도 async 키워드 쓸 수 있음.
// const f3 = async() => {
//     return 3;
// }
// console.log(`f1() >> `, f1()); // f1() >>  Promise { 1 }
// console.log(`f2() >> `, f2()); // f2() >>  Promise { <pending> }

// f1().then(function(result) {
//     console.log(result); // 1
// })
// f2().then(function(result) {
//     console.log(result); // 1
// })

// --------------------------------------
// async/await
// await: 기다리다
// - 성공/실패로 프로미스 객체의 실행이 완료되기를 기다림
// - await 뒤에는 프로미스가 오게 됨
// ** async 키워드를 사용한 함수 안에서만 await를 사용 가능 (await 단독 사용 불가능)

// async/await는 세트다!!!!!!

// function fetchFruits() {
//     return new Promise(function(res, rej) {
//         setTimeout(function(){
//             const fruits = [`melon`, `apple`, `orange`];
//             // res(fruits);
//             rej(new Error(`알 수 없는 에러 발생`))
//         }, 100);
//     });
// }

// // i) promise then()
// fetchFruits()
//     .then(function(f) {
//         console.log(f); // [ 'melon', 'apple', 'orange' ]
//     })
//     .catch(function(err) {
//         console.log(err);
//     })

// // ii) async/await
// // asyn/await 에서는 예외 처리를 try-catch 구문으로 하게 됨 !
// async function printItems() {
//     try {
//     // const fruits = fetchFruits(); // Promise { <pending> }
//     const fruits = await fetchFruits();
//     console.log(fruits); // [ 'melon', 'apple', 'orange' ]
//     }

//     catch(err) {
//         console.log(err);
//     }
// }
// printItems();



function goMart () {
    console.log(`마트에 가서 어떤 음료를 살지 고민한다..`);
}

function pickDrink() {
    return new Promise (function (res, rej) {
        setTimeout(function() {
            console.log(`고민 끝`);
            product = `제로콜라`;
            price = 6000;
            // res();
            if (price <= 3000) {
                res();
            } else {
                rej();
            }
        }, 3000);
    }) 
}


function pay() {
    console.log(`상품명: ${product} // 가격: ${price}`);
}

function nopay() {
    console.log(`잔액이 부족합니다.`);
}

async function exec() {
    try {
        // 장점) 함수의 실행 순서가 명확히 보인다 !!
        goMart();
        await pickDrink(); // 시간이 걸리는 pickDrink() 함수의 작업을 await 키워드로 인해 기다려줌
        pay();
    }

    catch(err) {
        nopay();
    }
}

exec();

// for문으로 구구단
for (let i = 2; i < 10; i++) {
    console.log(`${i}단 시작`);
    for (let j = 1; j < 10; j++) {
        console.log(`${i}x${j}=${i*j}`);
    }
}

// 실습 1 (배수 찾기)
for (let i = 0; i <= 10000; i++) {
    if (i % 13 == 0 && i % 2 == 1) {
        console.log(i);
    }
}

// 실습 1 +
let num = parseInt(prompt(`숫자를 입력하세요`));
for (let i = 0; i <= num; i++) {
    if (i % 13 == 0 && i % 2 == 1) {
        console.log(i);
    }
}

// 실습 3 (배수의 합)
let sum = 0;
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0 || i % 5 === 0){
        sum += i;
    }
}
console.log(sum);

console.log(`-----------------------`);

let i = 0;
let sum2 = 0;

while (i <= 100) {
    i % 2 === 0 || i % 5 === 0 ? sum2 += i : false;
    i++;
}
console.log(sum2);

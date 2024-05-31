// 반복문

// for문
for (let i = 0; i < 10; i++) {
    // i가 0 ~ 9 이면 총 10 번 반복
    console.log("안녕", i);
}

// 1 ~ 5 출력
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

console.log("---------------------");
// 5 ~ 1 출력
for (let i = 5; i >= 1; i --) {
    console.log(i);
}

console.log("---------------------");

// 1부터 n까지의 합 구하기
// let n = parseInt(prompt(`숫자를 입력해주세요.`));
let n = 10;
let sum = 0;
for (let i = 0; i <= n; i++) {
    // sum 변수에 값을 재할당 (이전 sum 변수의 값 + 현재 반복 변수 i)
    sum += i;
    console.log(`현재 i 는 ${i}, 누적합계는 ${sum} 입니다.`);
}
console.log(`총 합계는 ${sum} 입니다.`);

console.log("---------------------");

// 1 ~ 20 까지 숫자를 반복
// 1 ~ 20 중에서 짝수 일 때의 합을 구하기.
let num = 20;
let num_sum = 0;
for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
        console.log(`${i} 은 짝수입니다.`);
        num_sum += i;
        console.log(`현재까지 누적합계는 ${num_sum} 입니다.`);
    }
    
}
console.log(`총 합계는 ${num_sum} 입니다.`);

console.log("---------------------");



// while 문
let idx = 0;
while (idx < 10) {
    console.log(`안녕하세요`, idx + 1);
    idx += 1;
}

let idx2 = 0;
while (true) {
    console.log(`반갑습니다.`, idx2 + 2);
    idx2 += 1;
    if (idx2 == 10) break;
}

console.log("---------------------");

// 구구단 while 버전
let i = 2, j = 1;

while (i < 10) {
    console.log(`${i}단 시작.`);
    while (j < 10) {
        const multiply = `${i} x ${j} = ${i*j}`
        console.log(multiply);
        j++;
    }
    i++;
    j = 1;
}


/////////////////////////////////////////////////

//do ~ while 문
/**
 * JavaScript에서 사용되는 반복문 중 하나로,
 * 조건이 참인지 여부에 상관없이 코드 블록을 최소 한 번 실행 한 후 조건을 검사한다.
 * 즉) 항상 코드 블록을 한 번 실행한 다음, 조건이 참인 동안 반복을 계속 !
 */

// * 구문
// do {
//     // 실행할 코드 내용
// } while(조건);

// ex1)
// let g = 1;
// do {
//     console.log(g);
//     g++;
// } while (g <= 5);

// ex2)

let number;

do {
    number = parseInt(prompt(`숫자를 입력하세요 (10보다 큰 숫자):`), 10);
} while (number <= 10)
    console.log(`입력한 숫자: `, number);


/////////////////////////////////////////////////
// break & continue
// - 반복문에서 사용 되는 제어문.

// # break
// - 반복문을 중단하고 빠져나옴.

// # continue
// - 현재 반복을 중지하고 다음 반복으로 넘어감.

// ex)
for (let i = 1; i <= 10 ; i++) {
    if (i === 5) {
        break; // i = 5 일 때 반복문 종료.
    }
    console.log(i);
}
// 출력 결과 : 1, 2, 3, 4
console.log(`------------------------------`);

// ex2)
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue; // 현재 반복을 중지하고 다음 반복으로 넘어간다.
    }
    console.log(i);

}
// 출력 결과 : 1, 2, 4, 5
console.log(`------------------------------`);
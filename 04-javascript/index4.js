// 자료형 (data types)
// Q) 데이터 (변수)의 종류가 무엇인가?
// - Primitive(원시 타입) : string, number, boolean, undefined, null ...
// - Object(객체 타입) : Primitive 타입이 아닌 나머지 ...

// 1. string (문자열)
// - 텍스트 정보, 따옴표로 감싸야 함.
// - 숫자, 특수문자도 따옴표 안에 포함 되어 있다면? -> 문자열이다.

let text = `안녕하세요`;
let text2 = `하이!`;
let gender = `남성`

console.log(text);
console.log(text2);
console.log(text + text2);

// 문자 + 변수를 동시에 쓰고 싶을 때
console.log(text + "저는 새싹 입니다. 저의 성별은 " + gender + `입니다 !`);
console.log(text, text2, `야호`);

// 템플릿 리터럴 (= 문자를 표현하는 새로운 문법)
// (ES6) 백틱(`)와 달러($), 중괄호({}) 조합으로 사용한다.
// - 문자열 내에서 변수와 상수를 간결히 표현
console.log(`${text} 저는 새싹 입니다. 저의 성별은 ${gender} 입니다 !`);

// 2. number (숫자형)
// - 정수, 실수
// - 연산이 가능하다. (+ - * /)

let num = 100;
let num2 = 0.12;

console.log(num, num2); // 100 0.12
console.log(num + 1); // 101
console.log(num - 1); // 99
console.log(num * 2); // 200
console.log(num / 2); // 50

console.log(num2 + 1); // 1.12

// 3. boolean (불리언)
// - true, false (참, 거짓) 두 가지 값만 가지는 데이터.

let isWater = true;
let haveMoney = false;

console.log(isWater, haveMoney);

// 4. null (빈 값)
// "값이 없음"을 의도적으로 명시.

let temp = null;
console.log(temp);
temp = `hello~`;
console.log(temp);

// 5. undefined
// 값도 없고, 타입도 저장되지 않은 상태.

let x; // 변수 선언만 했을 때 초기 값으로 undefined 할당
console.log(x); // undefined

// 6. 배열 (Array)
// 배열의 이름 : fruits
// 배열의 요소 (아이템) : 배열 안에 있는 데이터 하나하나
// 배열의 위치 (인덱스) : 0부터 시작 - zero based numbering
// 배열의 길이 (크기) : 요소의 개수와 동일

const fruits = [`orange`, `pineapple`, `grape`, `apple`]
console.log(fruits);
console.log(fruits[0]);
// orange
// fruits 배열의 위치가 0인 요소 출력

// JS 에서는 배열 요소의 자료형이 달라도 된다 !!
// WHY?
// A) JS의 동적 타입 특성으로 인한 유연성. - 느슨한 언어.

const mixedArray = [1, `SeSac`, true, {name:`On`}, null] // name: On -> 객체
console.log(mixedArray);

// Array 안에 Array 들어갈 수 있음 (중첩 가능) => 2차원 배열

const korean = [
    ["가", "나", "다"],
    ["라", "마", "바"],
    ["사", "아", "자"],
]
console.log(korean);
console.log(korean[0]); // ["가", "나", "다"],
console.log(korean[1]); // ["라", "마", "바"],
console.log(korean[2]); // ["사", "아", "자"]

// - '나' 만 뽑아 내려면 ?
console.log(korean[0][1]); // 나

// `가자` 출력하기
console.log(korean[0][0] + korean[2][2]);
// `사다` 출력하기
console.log(korean[2][0] + korean[0][2]);

// 3차원 배열에서 숫자 8 출력
const nums = [
    [
        [1, 2, 3],
        [4, 5, 6]
    ],
    [
        [7, 8, 9],
        [10, 11, 12]
    ]
];

console.log(nums[1][0][1]);

// 7. 객체 (Object) (key: value)
// - 프로그래밍에서 실제 존재하는 개체나 개념을 표현하는 데이터 구조.
// - 속성과 메서드로 구성.
// - *속성
// - 키(key)와 값(value)의 쌍으로 이루어져 있다. - 상태나 특징.
// - *메서드
// - 함수(function)를 값으로 가진다. - 동작이나 행위.

const cat = {
    name: `장화`, // "name"이 key, "장화"가 값(value).
    age: 10,
    isCute: true,
    mew: function() {
        return `냐옹`;
    }
}

console.log(cat); // object 자체를 출력

// 객체(object)의 속성(key)에 접근하는 방법
// #1. 점 표기법 (.)
console.log(cat.name); // 장화
console.log(cat.age); // 10
console.log(cat.mew()); // 냐옹

// #2. 대괄호 표기법 ([])
console.log(cat[`name`]); // 장화

// #3. key가 변수에 저장되어 있을 때 사용법
const temVal = `name`;
console.log(cat[temVal]); // cat[`name`] => cat.name => 장화

// 8. typeof : 자료형을 확인할 수 있는 키워드
// typeof X 형식
console.log(typeof `문자`); // string
console.log(typeof 12345); // number
console.log(typeof 3.14); // number
console.log(typeof true); // boolean
console.log(typeof false); // boolean
console.log(typeof null); // object
// js의 초기 구현 중 하나로서, null 값을 object로 분류하는 것은 공식적으로 인정한 언어의 설계상의 오류.
console.log(typeof undefined); // undefined
console.log(typeof fruits); // object
console.log(typeof cat); // object

// 9. (자료)형변환

let mathscore = prompt(`수학점수 입력`);
console.log(mathscore, typeof mathscore); // 입력값, string
let engscore = prompt(`영어점수 입력`);
console.log(engscore, typeof engscore);
let avg = ((mathscore + engscore) / 2); // 입력값, string
console.log(`수학점수 영어점수 평균은 ${avg}점 입니다.`);

// #1. String(): 문자로 형변환
let str1 = true;
let str2 = 123;
let str3 = undefined;

console.log(str1, typeof str1); // true `boolean`
console.log(String(str1), typeof String(str1)); // true string
console.log(String(str2), typeof String(str2)); // 123 string
console.log(String(str3), typeof String(str3)); // undefined string
console.log(str1.toString(),typeof str1.toString()); // true string

// #2. Number(): 숫자로 형변환
let n1 = true;
let n2 = false;
let n3 = 123.9;

console.log(n1, typeof n1); // true `boolean`
console.log(Number(n1), typeof Number(n1)); // 1 `number`
console.log(Number(n2), typeof Number(n2)); // 0 `number`
console.log(n3, typeof n3); // 123.9 number
console.log(Number(n3), typeof Number(n3)); // 123.9 `number`
console.log(parseInt(n3, 10));
// n3의 값을 10진수의 정수(int)로 바꾸겠다. // 123
console.log(parseFloat(n3));
// n3의 값을 실수(float)로 바꾸겠다. // 123.9

// + ) null, undefined를 숫자로 바꾼다면?
console.log(undefined, typeof undefined); // undefined `undefined`
console.log(Number(undefined), typeof Number(undefined)); // NaN `number`
// NaN = Not - A - Number (숫자가 아님)

// 정의 되지 않은 값이 숫자로 변환 될 수 없기 때문!
console.log(null, typeof null); // null object
console.log(Number(null), typeof Number(null)); // 0 `number`
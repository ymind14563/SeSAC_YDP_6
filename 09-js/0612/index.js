//구조분해 할당 (Destructuring assignment)
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [`a`, `b`, `c`];

const [one, two, three, four, five] = arr1;
console.log(one, two, three, four, five);

// 없으면 undefined
const [x, y, z, alpha] = arr2;
console.log(x, y, z, alpha);


// 변수값의 교환, 
// 과거에 2개의 변수값을 교환할 때는 제 3의 변수 사용을 했어야 했으나, 지금은 그렇지 않다.
let num1 = 1;
let num2 = 2;
console.log(`Before :`, num1, num2); // Before : 1 2
[num2, num1] = [num1, num2];
console.log(`After :`, num1, num2); // After : 2 1

// 없으면 undefined이기 때문에, 만약 값이 없을 시 default 값을 지정할 수 있다.
const lists = [`apple`, `grape`];
[f1, f2, f3 = `oragne`] = lists;
console.log(f1 ,f2, f3); // apple grape oragne

// 객체 (object) : {key와 value}와 같이 쌍으로 이루어진 것.
const obj = {
    title : `엘리먼트`,
    content : `fun`,
    num : 5
};
console.log(obj);

// . 표기법
console.log(obj.title);

// [] 표기법
console.log(obj[`title`]);

// 객체 구조 분해
const {num, title, content, star = 1000} = obj;
console.log(num, title, content, star); // 5 엘리먼트 fun 1000

// 배열은 값에 새로운 변수로 지정 가능하나, 객체는 키가 중요하기 때문에 같은 이름을 사용해야 한다.
const {a1, b1, c1} = obj;
console.log(a1, b1, c1); // undefined undefined undefined
// undefined : 변수는 할당 되었지만 (초기화), 값이 할당 되지 않은 상태.

// , 를 마지막에 넣어도 error가 나지 않는다.
const lectureInfo = {
    name : `Coding on`,
    part : `web`,
    leader : `Kim`,
}

console.log(lectureInfo);

function getInfo(lecture) {
    const {name, part, leader} = lecture;
    const output = `${name} 강의는 ${part} 개발을 공부합니다. 수업의 리더는 ${leader} 입니다.`;
    return output;
}

const result = getInfo(lectureInfo);
console.log(result);





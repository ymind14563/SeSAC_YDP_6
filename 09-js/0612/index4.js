// && ||
// true && true
// true && false

const x = 5;
const result = x || 100; 
// OR: 왼 -> 오 순으로 검사, 어짜피 왼에서 true 이므로 나머지는 보지않는다.
console.log(result);

const y = 7;
const result2 = x < y && `abc`; 
// AND: 왼 -> 오 순으로 검사, and 이므로 마지막까지 검사하기에 마지막 값이 출력.
console.log(result2);

//falsy : undefined, null, 0, false, ``, NaN 는 그냥 거짓으로 취급.

// 유저가 선택한 색상, 선택하지 않았을 때 기본색상 설정 시 간단히 OR연산자로 적용 가능하다.
// OR 연산자이므로 왼쪽에 값이 있으면 이미 true이므로 왼쪽이 결과로 나오기 때문.
let userColor = `red`;
let defaultColor = `blue`;
let currentColor = userColor || defaultColor;
console.log(currentColor);
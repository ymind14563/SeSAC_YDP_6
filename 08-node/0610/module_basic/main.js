// 모듈 출력 방법 (common js module)

const add = require(`./m1`);
console.log(add(1, 2));

const math = require(`./m2`);
console.log(math.add(1, 2));
console.log(math.subtract(10, 5));

const math = require(`./m2`);
const {add, subtract} = math; // es6 문법; 각각 적용된다.
console.log(add(1, 2));
console.log(subtract(10, 5));


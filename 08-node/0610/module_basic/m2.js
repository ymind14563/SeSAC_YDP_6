// 모듈의 형태 (3)
const add = (a, b) => {
    return a + b;
}

const subtract = (a, b) => {
    return a - b;
}
module.exports = {
    // 이름이 같을 땐 하나만 적어도 된다.
    add, // => add : add,
    subtract // => subtract: subtract
}
// 기존의 방식
const d = `HELLO`.split(``);
console.log(d); // [ 'H', 'E', 'L', 'L', 'O' ]

// spread 연산자 ( ... ) : 배열값을 전부 나눠서 새로운 배열로 합쳐준다.
const c = [...`HELLO`]; // [ 'H', 'E', 'L', 'L', 'O' ]
console.log(c);


const a = [1, 2, 3];
const b = [4, 5];

console.log(a + b); // 1,2,34,5
const spread = [...a, ...b];
console.log(spread); // [ 1, 2, 3, 4, 5 ]

// spread 연산자를 object
const chip = {
    base : `chip`,
    company : `lotte`,
};

const potatoChip = {
    ...chip,
    flavor : `potato`,
}

console.log(chip); // { base: 'chip', company: 'lotte' }
console.log(potatoChip); // { base: 'chip', company: 'lotte', flavor: 'potato' }

// -------------------------------
// rest 파라미터
// 함수에서 사용시
// 배열에서 사용
const values = [10, 20, 30, 40, 50, 60];
function get(a, b, ...rest) { //  순서대로 읽고 나머지 값들은 rest에 넣는다.
    console.log(a, b); // 10 20
    console.log(rest); // [ 30, 40, 50, 60 ]
}
get(...values)

function get2(a, b, c, ...rest) { //  순서대로 읽고 나머지 값들은 rest에 넣는다.
    console.log(a, b, c); // 10 20 30
    console.log(rest); // [ 40, 50, 60 ]
}
get2(...values)

// -------------------------------
// 객체에서 사용
const icecream = {
    company: 'lotte',
    flavor: 'choco',
    price: 1000,
};
const {flavor, ...abc} = icecream;
console.log(flavor); // choco
console.log(abc); // { company: 'lotte', price: 1000 }

// ------ 배열
const number = [1, 2, 3, 4, 5, 6, 7, 8];
const [one1, two1, ...rest2] = number;
console.log(one1, two1); // 1 2
console.log(rest2); // [ 3, 4, 5, 6, 7, 8 ]



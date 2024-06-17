// JSON
const car = `{
    "model" : "IONIQ 5",
    "company" : "HYUNDAI",
    "price" : 50000000,
    "year" : 2023,
    "isElectricCar" : true,
    "options" : ["side mirror", "smart sensor", "built-in cam"]
}`;

console.log(car); // format: JSON


// 역직렬화 : JSON parse() -> 통신하여 받은 데이터를 객체로 변환
// json to js obj
const obj = JSON.parse(car);
console.log(obj); // js obj

// obj 변수는 js object이므로 .(dot)/[] 연산자를 이용해 키 값에 접근 가능.
console.log(obj.model); 
console.log(obj.price); 
console.log(obj.hello); // undefinded (hello 라는 키가 없으므로)

// 직렬화 : JSON.stringify() -> 통신하기 쉬운 포맷(JSON)으로 변환
// js obj to json
const json = JSON.stringify(obj);
console.log(json, typeof json); // JSON타입 값, string

// json 변수는 JSON 형태의 "문자열(string)" 이므로
// .(dot)/[] 연산자를 이용해 키 값에 접근이 불가능하다.
console.log(json.model); // undefinded
console.log(json.price); // undefinded
console.log(json.hello); // undefinded (hello 라는 키가 없으므로)

// json 변수는 "문자열(string)" 이므로
// string 타입에 쓸 수 있는 내장매소드는 사용 가능 !
console.log(json.split(""));
console.log(json.toUpperCase());




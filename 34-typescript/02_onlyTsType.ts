// only TS type (ts type)
// npx ts-node 02_onlyTsType.ts

import { StringLiteral } from "typescript";

// * 튜플 (Tuple)
// - 튜플은 고정된 개수의 요소를 가짐
// - 각 요소의 타입이 미리 지정된 배열
// - 각 요소의 순서가 주요하며 순서에 따라 타입이 다를 수 있음

// 튜플 타입 선언
let drink: [string, string];

// 튜플의 값 할당
drink = ['cola', 'cocaCola']; 
console.log('drink >>> ', drink); // drink >>>  [ 'cola', 'cocaCola' ]

// 튜플 타입 선언과 할당을 동시에 하는 법
let drink2: [string, string] = [ 'cola', 'pepci' ];
console.log('drink2 >>> ', drink2); // drink2 >>>  [ 'cola', 'pepci' ]

// 튜플의 데이터를 변경할 때에도, 배열의 데이터를 변경했던 것처럼 인덱스로 접근
// 또한, 배열의 메소드도 사용 가능

// 인덱스로 접근해 값 변경 가능
drink2[0] = 'zeroCola'
drink2[1] = 'zeroPepci'
console.log('drink2 >>> ', drink2); // drink2 >>>  [ 'zeroCola', 'zeroPepci' ]

drink2.push('good');
console.log('drink2 >>> ', drink2); // drink2 >>>  [ 'zeroCola', 'zeroPepci', 'good' ]

/**
 * * 튜플의 숨겨진 한계
 * : 길이와 타입이 정해진 것처럼 보이지만, push 메서드가 동작하므로 그 정의가 깨짐
 * 튜플이라 고정된 개수가 변하면 안되는데 변해버림
 * 
 * Why?
 * - TS의 타입 시스템이 배열 메소드와 관련된 동작을 '완전히' 제한하지 않기 때문
 * 
 * 이처럼 타입 시스템의 의도와 어긋나는 동작을 방지하고자 한다면,
 * as const를 사용하거나, readOnly 키워드를 사용하여 튜플을 불변으로 만들 수 있음 (readOnly 쓰는 이유)
 */

// readOnly
// - 요소의 타입 순서와 길이를 "완벽히" 고정
let drink3: readonly[string, number] = ['cider', 2000]
// drink3.push('hello'); // Error // readOnly 때문에 불가능
console.log('drink3 >>> ', drink3); // drink3 >>>  [ 'cider', 2000 ]

// * type 별칭
// - type 별칭을 이용해 type 선언 가능!
type campionInfo = [number, string, number];

// 엄격하고 명확히 데이터를 관리해야하는 작업일 경우 사용하면 좋음
let most1: campionInfo = [1, 'Yumi', 50000];
let most2: campionInfo = [2, 'Timo', 30000];


// ################################
// * Enum
// - 사용하는 이유?
// 1. 분야별로 종류를 정의하여 명확하게 사용
// 2. 하드코딩의 실수를 줄이기 위해

// - 숫자값 지정 가능
enum Auth {
    admin = 0,
    user = 1,
    guest = 2
}

// - #1. enum은 기본으로 0부터 1씩 증가하는 값을 가짐
enum Auth2 {
    admin,
    user,
    guest
}
console.log(Auth2.admin); // 0
console.log(Auth2.user); // 1
console.log(Auth2.guest); // 2

// - #2. 정의되지 않은 값은 "이전" 값에 1씩 더 해짐
enum Menu {
    pasta = 4000,
    pizza = 5000,
    chicken
}

console.log(Menu.pasta); // 4000
console.log(Menu.pizza); // 5000
console.log(Menu.chicken); // 5001


// - #3. 문자열 지정가능
enum Cafe {
    americano = '아메리카노',
    latte = '카페라떼'
}

console.log(Cafe.americano); // 아메라카노
console.log(Cafe.latte); // 카페라떼

// - #3-2. 문자열 & 숫자 혼합 지정 가능
enum Cake {
    choco,
    vanilla = 200,
    mango,
    kiwi = 'kiwi'
}

console.log(Cake.choco); // 0
console.log(Cake.vanilla); // 200
console.log(Cake.mango); // 201
console.log(Cake.kiwi); // 'kiwi'

// ################################
// * Any
// 1. 명시적 타입 지정
let val: any;
val = true;
val = 'Dog';
console.log(val); // 'Dog'

// 2. 암시적 타입 지정
let val2;
val2 = false;
val2 = 'Cat';
console.log(val2);

// ################################
// 실습 과제
// 오브젝트, 불리언(boolean) 데이터 타입 순으로 설정하는 튜플 만들어보기
// olimpic_newgame[1]=false; 를 했을 때 변경되지 않도록 수정할 수 없는 데이터 만들기

let olimpic_newgame: readonly [object, boolean];

olimpic_newgame = [
    {
      name: "쇼트트랙",
      type: "혼성 계주",
    },
    true,
  ];

  console.log(olimpic_newgame);


// ################################
// * Interface
// #1. 객체 타입 정의
// - interface 키워드 사용
interface Crew {
    name: string;
    age: number;
    exp: boolean;
}

// "Crew" 인터페이스는 세 가지 속성을 요구함
// - crew1 객체는 이 구조를 따라야 함
// - 객체 안에 순서는 상관없음
const crew1: Crew = {
    name: 'hong',
    age: 20,
    exp: true
}
console.log(crew1); // { name: 'hong', age: 20, exp: true }

// #2. 선택적 속성
// - 모든 속성이 필수는 아님
// - '?' 붙이기
interface Crew2 {
    name: string;
    age?: number; // age는 선택적 속성
}

// crew2 객체는 age 속성이 없어도 유효함
const crew2: Crew2 = {
    name: 'hong'
}
console.log(crew2); // { name: 'hong' }

// #3. readOnly 읽기 전용 속성
// - 객체가 초기화 된 후에는 변경할 수 없음
interface Crew3 {
    name: string;
    readonly age: number;
    exp: boolean;
}

const crew3: Crew3 = {
    name: 'kim',
    age: 30,
    exp: false
}
console.log(crew3); // { name: 'kim', age: 30, exp: false }
crew3.name = 'Son'
console.log(crew3); // { name: 'Son', age: 30, exp: false }
// crew3.age = 30; // Error // readOnly

// #4. 상속도 가능 !
enum Score {
    Aplus = 'A+',
    A = 'A',
    Bplus = 'B+',
    Cplus = 'C+',
}


// #5. 인터페이스 확장
// - 기존 인터페이스의 모든 속성 포함 및 속성 추가
interface Team extends Crew {
    position: string,
    readonly personnel?: number, // readOnly // 없어도 되는 값
    [grade: number]: Score;
    // ** 인덱스 시그니처
    // - 객체가 어떤 키로든 접근할 수 있도록 허용하고, "키와 그에 대응하는 값의 타입" 을 정의할 수 있는 방법을 제공
    // [grade: number] - 숫자인 키(key)
    // [grade: number]: string - 숫자 키를 가진 객체가 문자열 값을 가질 것임을 명시
}

const first: Team = {
    name: 'Lee',
    age: 20,
    exp: true,
    position: 'FrontEnd',
    1: Score.Aplus
}
console.log(first); // { '1': 'A+', name: 'Lee', age: 20, exp: true, position: 'FrontEnd' }

// 값 변경 (점 접근법, 대괄호 법)
first.position = 'Backend';
first['age'] = 25;
console.log(first); // { '1': 'A+', name: 'Lee', age: 25, exp: true, position: 'Backend' }

// #6. 교차 타입: 두 개 이상의 interface를 합치는 것
interface Toy {
    name: string;
    start(): void;
}

interface Car {
    name: string; // 공통된 속성을 가지고 있어도 상관없음
    color: string;
    price: number;
}

interface ToyCar extends Toy, Car {} // 인터페이스 확장을 사용한 교차 타입
const toyCar: ToyCar = {
    name: 'tayo',
    start() {
        console.log('출발합니다'); // 함수도 가능
    },
    color: 'blue',
    price: 30000
}
console.log(toyCar);

// ################################
// * [번외] type 사용
type Gender = 'F' | 'M';
type Person = {
    name: string;
    age?: number;
    like?: string[];
    gender: Gender; // 위에서 정의한 'Gender' 타입 가짐 => 'F', 'M' 둘 중 하나여야 함
};

const IU: Person ={
    name: 'IU',
    age: 30,
    gender: 'F' // Gender 타입에 선언된 값만 넣을 수 있음
}
console.log(IU); // { name: 'IU', age: 30, gender: 'F' }

// ################################
// 실습 과제
// 아래 나와 있는 heroGame_A 와 heroGame_B 를 만족할 수 있는 interface Game 만들어보기
interface Game {
    title: string;
    price: number;
    desc?: string;
    category: string;
    platform: string;
}

let heroGame_A: Game = {
    title: 'DC 언체인드',
    price: 50000,
    desc: 'DC 히어로 & 빌런 각각의 개성은 물론, 액션의 재미까지!',
    category: '액션',
    platform: '모바일',
}

let heroGame_B: Game = {
    title: 'MARVEL 퓨처파이트',
    price: 65000,
    category: '롤플레잉',
    platform: '모바일',
}

  console.log(heroGame_A);
  console.log(heroGame_B);
  
  
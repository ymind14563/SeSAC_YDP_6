let age = prompt(`나이를 입력해주세요.`)

// console.log(`입력한 나이는 ${age}세 입니다.`);
// if (age >= 20) {
//     console.log(`성인`);
// } else if (age >= 17){
//     console.log(`고등학생`);
// } else if (age >= 17){
//     console.log(`고등학생`);
// } else if (age >= 14){
//     console.log(`중학생`);
// } else if (age >= 8){
//     console.log(`초등학생`);
// } else if (age >= 0){
//     console.log(`유아`);
// }


// const ageRange = function() {
//     if (age >= 20) {
//         return `성인`;
//     } else if (age >= 17){
//         return `고등학생`;
//     } else if (age >= 17){
//         return `고등학생`;
//     } else if (age >= 14){
//         return `중학생`;
//     } else if (age >= 8){
//         return `초등학생`;
//     } else if (age >= 0){
//         return `유아`;
//     }
// }

// console.log(ageRange(age));



// let score = parseInt(prompt("점수를 입력해주세요."))
// if (score < 0 && score > 100) console.log(`유효하지 않는 점수 범위입니다.`)


// switch (true) {
//     case score >= 90:
//         console.log(`A 학점`);
//         break;
        
//     case score >= 80:
//         console.log(`B 학점`);
//         break;

//     case score >= 70:
//         console.log(`C 학점`);
//         break;

//     case score >= 60:
//         console.log(`D 학점`);
//         break;
        
//     case score < 60:
//         console.log(`F 학점`);
//         break;

//     default:
//         console.log(`무슨 점수인지 모르겠습니다.`);

// }

let now = new Date().getHours();
console.log(now);
now < 12 ? console.log("오전") : console.log("오후");

let hours = new Date().getHours();
const amOrPm = hours < 12 ? '오전' : '오후';
console.log(`현재 시각은 ${amOrPm} ${hours % 12 || 12}시 입니다.`);

let day = new Date().getDay();
console.log(day);
const now2 = (0 < day < 6) ? `평일` : `주말`;
console.log(now2);
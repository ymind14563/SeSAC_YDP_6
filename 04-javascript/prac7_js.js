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


const ageRange = function() {
    if (age >= 20) {
        return `성인`;
    } else if (age >= 17){
        return `고등학생`;
    } else if (age >= 17){
        return `고등학생`;
    } else if (age >= 14){
        return `중학생`;
    } else if (age >= 8){
        return `초등학생`;
    } else if (age >= 0){
        return `유아`;
    }
}

console.log(ageRange(age));
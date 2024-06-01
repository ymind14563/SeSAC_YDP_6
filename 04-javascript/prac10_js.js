// 1 ~ 100까지 배열 만들기
let nums = [];
for (let i = 0; i < 100; i++) {
    nums[i] = i + 1;
}
console.log(nums);

// 배열 합 구하기 (for)

let sum_for = 0;
for (let i = 0; i < nums.length; i++) {
    sum_for += nums[i];
}
console.log(sum_for);

// 배열 합 구하기 (For of)

let sum_for_of = 0;
for (num of nums) {
    sum_for_of += num;
}
console.log(sum_for_of);

// 배열 합 구하기 (forEach)

let sum_forEach = 0;
nums.forEach (function(num) {
    sum_forEach += num;
})
console.log(sum_forEach);


// 배열 합 구하기 (forEach_2)
let sum_forEach_2 = 0
nums.forEach(num => sum_forEach_2 += num);
console.log(sum_forEach_2);
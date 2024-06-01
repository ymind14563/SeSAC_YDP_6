let fruits1 = [`사과`, `딸기`, `파인애플`, `수박`, `참외`, `오렌지`, `자두`, `망고`];
let fruits2 = [`수박`, `사과`, `참외`, `오렌지`, `파인애플`, `망고`];

let same = [];
let diff = [];

// same
fruits1.forEach(fruit => {if(fruits2.includes(fruit)) same.push(fruit);})
console.log(same);

// different
fruits1.forEach(fruit => {if(!(fruits2.includes(fruit))) diff.push(fruit);})
console.log(diff);
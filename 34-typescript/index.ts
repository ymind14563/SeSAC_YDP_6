// npm install typescript (mac: sudo npm install typescript)
// 버전 확인: npx tsc -v
// tsconfig 파일 생성: npx tsc --init
// ts 파일을 js로 변환하고 싶을 때 npx tsc 파일이름.ts
// 실행은 기존 js와 같음 (node 파일이름.js)

// 변환 + 실행 자동
// npm install ts-node (mac: sudo npm install ts-node)
// 실행은 npx ts-node 파일이름.ts

console.log('안녕');

const msg: string = '타입 스크립트를 배워보자';
const num: number = 100;
console.log('msg >>> ', msg);
console.log('num >>> ', num);

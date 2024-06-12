// ... 연산자 실습
const word1 = `abc`;
const word2 = `xyz`;
const arr = [...word1, ...word2]
console.log(arr); 


// 클래스 실습
class Shape {
    constructor (width, height) {
        this.width = width;
        this.height = height;
    }
   
}
// 직사각형
class Rectangle extends  Shape {
    constructor (width, height) {
        super(width, height)
    }
    getArea() {
        return `직사각형의 넓이는 ${this.width * this.height} 이다.`;
    }

    getSqrt() {
        return `직사각형의 대각선 길이는 ${Math.sqrt(this.width**2 + this.height**2)} 이다.`;
    }
}
// 삼각형
class Triangle extends Shape {
    constructor (width, height) {
        super(width, height)
    }
    getArea() {
        return `삼각형 넓이는 ${this.width * this.height / 2} 이다.`;
    }
    
}
// 원
class Circle extends Shape {
    constructor (width, height, radius) {
        super(width, height)
        this.radius = radius;
    }
    getArea() {
        return `원의 넓이는 ${this.radius**2}  π 이다.`;
    }
}



let rec1 = new Rectangle(3, 4);
let rec2 = new Triangle(3, 4);
let rec3 = new Circle(3, 4, 2);

console.log(rec1.getArea());
console.log(rec1.getSqrt());
console.log(rec2.getArea());
console.log(rec3.getArea());
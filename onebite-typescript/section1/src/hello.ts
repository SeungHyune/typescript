const sayHello: string = 'Hello';
console.log(`${sayHello} world!!`)

const age: number = 20;
console.log(`나이는 ${age}살 입니다.`);

let age2: 20 = 20;
// age2 = 21; // number 임에도 할당 불가

let name: '조승현' = '조승현';
// name = '조승현2'; string 임에도 할당 불가

let name2: string | number = 'string';
name2 = 20; // string, number 둘 다 할당가능

let nul: null = null;
//nul = undefined; // null 타입은 null만 가능..

console.log(name2);
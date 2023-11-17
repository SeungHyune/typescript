/**
 * 대수 타입
 * -> 여러개의 타입을 합성해서 새롭게 만들어낸 타입
 */

/**
 * 1. 합집합 타입 - Union 타입
 * or 또는 연산자
 */

let a: string | number | boolean;
a = 1;
a = 'hello';
a = true;
// a = null; // 불가능

let b: string | number;
b = 111;
b = 'test';
// b = true; // 불가능

const arr: (number|string|boolean)[] = [28, '조승현', true];

type Union1 = Dog | Person;

let union1: Union1 = {
    name: '댕댕이',
    color: 'white'
}

let union2: Union1 = {
    name: '조승현',
    age: 28
}

let union3: Union1 = {
    name: '댕댕이 + 조승현',
    color: '댕댕이 white',
    age: 28
}

// let union4: Union1 = {
//     name: '';
// }

type Animal = {
    name: string;
    color: string;
    age: number;
    type: string;
}

type AnimalSound = {
    sound: string;
    move: string;
}

type AnimalUnion = Animal | AnimalSound;

const animal: AnimalUnion = {
    sound: '어흥!',
    move: '당당'
}

const animalAll: AnimalUnion = {
    name: '호랑이',
    color: 'yellow & black',
    age: 3,
    type: '포유류',
    sound: '어흥',
    move: '성큼성큼',
}

/**
 * 2. 교집합 타입 - Intersection 타입
 */

let variable: number & string; // 이렇게 기본 타입으로 Intersection 타입을 만들면 거의 never 타입 - 공집합이 된다.

type Dog = {
    name: string,
    color: string
}

type Person = {
    name: string,
    age: number
}

type Intersection = Dog & Person;
let intersection: Intersection = {
    name: '',
    color: '',
    age: 1
}

type AnimalName = {
    name: string;
}

type AnimalColor = {
    color: string;
}

type AnimalIntersection = AnimalName & AnimalColor;

const intersectionAnimal: AnimalIntersection = {
    name: '사자',
    color: 'yellow',
}
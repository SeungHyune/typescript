/**
 * 인터페이스의 확장
 */

interface Animal {
    name: string;
    age: number;
}

interface Dog extends Animal {
    // name: string;
    // age: number;
    isBark: boolean;
}

interface Cat extends Animal{
    // name: string;
    // age: number;
    isScratch: boolean;
}

interface Chicken extends Animal{
    // name: string;
    // age: number;
    name: '재정의', // 원본 프로퍼티 타입의 서브 타입으로만 재정의가 가능하다.
    isFly: boolean;
}

let dog: Dog = {
    name: '바둑이',
    age: 1,
    isBark: true,
}

let cat: Cat = {
    name: '나비',
    age: 2,
    isScratch: true
}

let chicken: Chicken = {
    name: '재정의',
    age: 1,
    isFly: false
}

interface DogCat extends Dog, Cat {
    color: string;
}

let dogCat: DogCat = {
    name: '개냥이',
    age: 3,
    color: 'white',
    isBark: true,
    isScratch: false,
}
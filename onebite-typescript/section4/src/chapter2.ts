/**
 * 함수 타입 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단
 * 1. 반환값의 타입이 호환되는가
 * 2. 매개변수의 타입이 호환되는가
 */

// 기준1. 반환값이 호환되는지 체크
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b; // 업 캐스팅
// b = a; // 다운 캐스팅

// 기준2. 매개변수가 호환되는지 체크
// 2-1. 매개변수의 개수가 같을 때

type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// 매개변수를 기준으로 함수 타입의 호환성을 판단할 때는 업 캐스팅이면 안되고 다운 캐스팅이면 된다.
// c = d; // 업 캐스팅
d = c; // 다운 캐스팅

type Animal = {
    name: string;
}

type Dog = {
    name: string;
    color: string;
}

let animalFunc = (animal: Animal) => {
    console.log(animal.name);
};
let dogFunc = (dog: Dog) => {
    console.log(dog.name);
    console.log(dog.color);
};

// animalFunc = dogFunc; // 업 캐스팅
dogFunc = animalFunc; // 다운 캐스팅

let testFunc = (animal: Animal) => {
    console.log(animal.name);
    // console.log(animal.color);
};

let testFunc2 = (dog: Dog) => {
    console.log(dog.name);
};

// 2-2. 매개변수의 개수가 다를 때 - 할당하려는 매개변수의 개수가 적을 때 할당 가능하다.

type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
// func2 = func1;
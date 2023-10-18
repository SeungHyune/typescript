/**
 * 함수 타입 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단
 * 1. 반환값의 타입이 호환되는가
 * 2. 매개변수의 타입이 호환되는가
 */

// 기준1. 반환값이 호환되는가
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b; // 허용 (업캐스팅) 
// b = a; // 안됌 (다운캐스팅 이기 때문에)

// 기준2. 매개변수가 호환되는가
// 2-1. 매개변수의 개수가 같을 때
// 매개변수의 경우 업캐스팅 X, 다운캐스팅 O


type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d; // 안됌 (업캐스팅)
d = c; // 허용 (다운캐스팅)

type Animal = {
    name: string,
}

type Dog = {
    name: string,
    color: string,
}

let animalFunc = (animal: Animal) => {
    console.log(animal.name);
};

let dogFunc = (dog: Dog) => {
    console.log(dog.name);
    console.log(dog.color);
}

// animalFunc = dogFunc;
dogFunc = animalFunc;

let testFunc = (animal: Animal) => {
    console.log(animal.name);
}

let testFunc2 = (dog: Dog) => {
    console.log(dog.name);
}

// 2-2. 매개변수의 개수가 다를 때
// 타입이 같을 경우 매개변수가 개수가 더 작은 경우 큰 매개변수에 적용 가능
// 반대는 불가능하다

type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2; // 매개변수 개수가 작은 타입에서 큰 타입으로 가능
// func2 = func1;
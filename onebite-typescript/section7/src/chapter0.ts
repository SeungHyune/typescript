/**
 * 제네릭 - 일반적인, 포괄적인 함수 | 모든 타입에 쓸 수 있는 범용적인 함수
 */

function func(value: unknown) {
    return value;
}

let num = func(10);
// num.toUpperCase();

// 타입 좁히기
if(typeof num === 'number') {
    num.toFixed();
}

let bool = func(true);
let str = func("Rekoding");

// 제네릭 함수
function GenericFunc<T>(value: T): T {
    return value;
}

let num2 = GenericFunc(10);
let bool2 = GenericFunc(true);
let str2 = GenericFunc('Rekoding');
let arr = GenericFunc<[number, number, number]>([1, 2, 3]);

function func2<T>(number: T): T {
    return number;
}

let number1 = func2(5);
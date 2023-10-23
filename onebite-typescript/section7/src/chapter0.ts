/**
 * 제네릭
 */

// 제네릭 함수
function func<T>(value: T): T {
    return value;
}

let num = func(10);
num.toFixed(); // 와우..

if(typeof num === 'number') {
    num.toFixed();
}

let bool = func(true);

let str = func('hello');

let arr = func<[number, number, number]>([1, 2, 3]);
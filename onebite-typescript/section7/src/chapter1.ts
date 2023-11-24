/**
 * 첫번째 사례
 */

// 타입이 서로 같은 경우
function swap<T>(a: T, b: T) {
    return [b, a];
}

const [a, b] = swap(1, 3);


// 타입이 서로 다른 경우
function swap2<T, U>(c: T, d: U) {
    return [d, c]
}

const [c, d] = swap2(1, '2');

/**
 * 두번째 사례
 */

function returnFirstValue<T>(data: [T, ...unknown[]]) {
    return data[0];
}

let num = returnFirstValue([0, 1, 2]);
// 0

let str = returnFirstValue(['hello', 'rekoding']);
// 'hello'

/**
 * 세번째 사례
 */

function getLength<T extends { length: number }>(data: T) {
    return data.length;
}

let var1 = getLength([1, 2, 3]); // 3
let var2 = getLength("12345"); // 5
let var3 = getLength({ length: 10 }); // 10
// let var4 = getLength(10);

function getName<T extends { name: string }>(data: T) {
    return data.name
}

let index1 = getName({ name: '조승현' });
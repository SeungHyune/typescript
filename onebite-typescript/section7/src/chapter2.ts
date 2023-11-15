/**
 * map 메서드 타입 정의하기
 */

const arr = [1, 2, 3];
const newArr = arr.map((it) => it * 2); // [2, 4, 6]

function map<T, U>(arr: T[], callback: (item: T) => U) {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }

    return result
}

map(arr, (it) => it * 2);
map(['a','b','c'], (it) => it + it);
map(['1', '2', '3'], (it) => parseInt(it));

/**
 * forEach 메서드 타입 정의하기
 */

const arr2 = [1, 2, 3];
arr2.forEach((it) => console.log(it));

function forEach<T>(arr: T[], callback: (item: T) => void) {
    for(let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}

forEach(arr2, (it) => console.log(it.toFixed()));
forEach(['123', '456'], (it) => it);
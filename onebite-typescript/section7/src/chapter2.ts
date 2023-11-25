/**
 * map 메서드
 */

const map = function <T, U>(arr: T[], callback: (a: T) => U) {
    const result = [];
    for(let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }

    return result;
}

const numArr = map([1,2,3], (a) => a * 2);
const strArr = map(['a','b','c'], (a) => parseInt(a));

console.log(numArr);
console.log(strArr);

/**
 * forEach 메서드
 */

const forEach = function <T>(arr: T[], callback: (a:T) => void) {
    for(let i = 0 ; i < arr.length; i++) {
        callback(arr[i]);
    }
}

const numArr2 = forEach([1, 5, 9], (a) => console.log(a.toFixed()));
const strArr2 = forEach(['A', 'B', 'C'], (a) => console.log(a));

console.log(numArr2);
console.log(strArr2);
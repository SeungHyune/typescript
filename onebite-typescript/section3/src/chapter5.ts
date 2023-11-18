/**
 * 타입 추론
 * 타입 추론의 기준은 변수의 초기값이다.
 */

let a = 10;
let b = 'hello';
let c = true;
let d = null;
let e = {
    id: 1,
    name: '조승현',
    profile: {
        nickname: 'rekoding'
    },
    urls: ['https://velog.io/@rekoding']
}

let {id, name, profile} = e;

let [one, two, three] = [1, 'hello', true];

function func(message = 'hello') {
    return 'hello';
}

// 초기값을 설정하지 않으면 암묵적 any 타입이 설정되고, 이후 타입이 진화하게 된다.
// 이는 타입이 어떻게 변화할 지 예상이 어려움으로 사용을 지양한다. (이러한 내용이 있다 정도로만 알고 있으면 된다.)
let g; // 암묵적 any 타입 (type이 진화한다.)
g = 10;
g.toFixed();

g = 'hello';
g.toUpperCase();
// d.toFixed();

// let으로 선언 시 타입을 지정해주지 않으면 암묵적으로 타입이 잘 추론 되지만,
// const로 선언 시 해당 값인 리터럴 타입으로 지정된다.
const num = 10;
const str = 'hello';
const nul1 = null; // null 타입
const unde1 = undefined; // undefined 타입

// array, object 타입의 경우 let, const 둘 다 동일하게 추론한다.
let arr = [1, 'string'];
const arr2 = [1, 'string'];

let obj1 = {
    name: '조승현1',
    age: 22
}

const obj2 = {
    name: '조승현2',
    age: 23
}
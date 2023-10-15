/**
 * 타입 추론
 * 타입 추론의 기준은 변수의 초기값이다.
 */

let a = 10;
let b = 'hello';
let c = {
    id: 1,
    name: '조승현',
    profile: {
        nickname: 'rekoding'
    },
    urls: ['https://velog.io/@rekoding']
}

let {id, name, profile} = c;

let [one, two, three] = [1, 'hello', true];

function func(message = 'hello') {
    return 'hello';
}

// 초기값을 설정하지 않으면 암묵적 any 타입이 설정되고, 이후 타입이 진화하게 된다.
// 이는 타입이 어떻게 변화할 지 예상이 어려움으로 사용을 지양한다. (이러한 내용이 있다 정도로만 알고 있으면 된다.)
let d; // 암묵적 any 타입 (type이 진화한다.)
d = 10;
d.toFixed();

d = 'hello';
d.toUpperCase();
// d.toFixed();

const num = 10;
const str = 'hello';

let arr = [1, 'string'];
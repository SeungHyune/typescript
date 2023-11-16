/**
 * 함수 타입 정의
 */

// 함수를 설명하는 가장 좋은 방법
// 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 이야기
// 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지 이야기

function func(a: number, b: number) {
    return a + b;
}

/**
 * 화살표 함수의 타입을 정의하는 방법
 */

const add = (a: number, b: number) => a + b;

/**
 * 함수의 매개변수
 */

function introduce(age: number, tall?: number, name = '조승현') {
    console.log(`name : ${name}`);
    if(typeof tall === 'number') {
        console.log(`tall : ${tall + 10}`);
    }
}

introduce(28, 177, 'Rekoding');
introduce(28);

function getSum(...rest: [number, number, number]) {
    let sum = 0;
    rest.forEach((it) => (sum += it));

    return sum;
}

getSum(1, 2, 3); // 6
getSum(2, 3, 4); // 9
// getSum(1, 2, 3, 4, 5); // 15 (tuple 타입이라서 오류가 나타난다.)


// 1)
const btn = document.querySelector('button');
// if(btn instanceof HTMLButtonElement) {}
if(btn) {
    btn.classList.add('btn');
    btn.id = 'abc';
}

// 2)
function isNum(val: unknown): val is number {
    return typeof val === 'number';
}
function toTwoDecimals(val: number | string) {
    if(isNum(val)) {
        val.toFixed(2);
    } else{
        val.slice(0, 2);
    }
}
toTwoDecimals(3.141592);
toTwoDecimals('Hello world');

// 3)
type UserA = { name: string, age: number }
type UserB = { id: string, email: string }

function isUserA(user: unknown): user is UserA {
    if(user && user.constructor === Object) {
        const u = user as UserA
        return typeof u.name === 'string' && typeof u.age === 'number'
    } 
    return false;
}

fetch('https//exam.site')
.then(res => res.json())
.then((user: UserA | UserB) => {
    if(isUserA(user)) {
        console.log(user.name[0]);
        console.log(user.age - 10);
    }
})
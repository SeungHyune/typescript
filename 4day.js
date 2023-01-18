let 동물 = 123;
let 동물2 = { name: 'kim', age: 18 };
const 여친 = {
    name: '엠버'
};
여친.name = '유라';
let position = { x: 10, y: 20 };
// (숙제1) object 타입을 정의한 type alias 두개를 & 기호로 합칠 때 중복된 속성이 있으면 어떻게 될까요?
// 그건 여러분들이 한번 테스트해보길 바랍니다. 
let test = { name: 'kim' };
console.log(test);
let obj = {
    size: 123,
    position: [1, 2, 3],
};
console.log(obj);
let info = { name: 'Jo', phone: 123, email: 'tmdgus7820@naver.com' };
let adult = {
    name: 'Jo',
    phone: 123,
    email: 'tmdgus7820@naver.com',
    isAdult: true
};
console.log(adult);
// Literal Type
let 접니다;
접니다 = '솔로';
function 함수(a, b) {
    console.log(a, b);
    return 1;
}
함수('hey', 'hello');
function 가위바위보(a) {
    return [a];
}
가위바위보('바위');
// as const 문법
var 자료 = {
    name: 'kim'
};
function myFn(a) {
    return console.log(a);
}
myFn(자료.name);
let fn = function () {
    return 1;
};
let 회원정보 = {
    name: 'kim',
    age: 30,
    plusOne(a) {
        return a + 1;
    },
    changeName: () => { }
};
회원정보.plusOne(2);
let cutZero = (a) => {
    let str = a;
    if (typeof str == "string" && str[0] == "0") {
        str = str.slice(1);
    }
    console.log(str);
    return str;
};
cutZero("0test");
let removeDash = (num) => {
    let result = num.replace(/-/g, "");
    console.log(result);
    return Number(result);
};
removeDash('010-2822-7820');
function 만들함수2(a, b, c) {
    let result = b(a);
    let result2 = c(result);
    console.log(result2);
}
만들함수2('010-1234-2222', cutZero, removeDash);

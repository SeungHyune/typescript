// Union Type
let 회원 = 'kim';
회원 = 123;
let 회원들 = [1, 2, 3, '4'];
let obj = { a: 123 };
// any타입 모든 자료형 허용해줌
// 쓰는 순간 typescript 쓰는 의미 상실
let 이름;
이름 = 123;
이름 = [];
이름 = 'kim';
let agee = 1;
//(숙제1) 다음 변수 4개에 타입을 지정해봅시다.
let user = 'kim';
let age = undefined;
let married = false;
let 철수 = [user, age, married];
//(숙제2) 학교라는 변수에 타입지정해보십시오.
let 학교 = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John'
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];
//함수
function 내함수(x) {
    return x * 2;
}
내함수(2);
내함수(4);
function 내함수2(x) {
    return x * 2;
}
//  (숙제1) 이름을 파라미터로 입력하면 콘솔창에 "안녕하세요 홍길동"을 출력해주고
//  아무것도 파라미터로 입력하지 않고 함수를 사용하면 "이름이 없습니다" 를 출력하는 함수를 만들어봅시다.
//  파라미터와 return 타입지정도 잘 해봅시다. 
function sayHi(name) {
    if (name != undefined) {
        console.log(`안녕하세요 ${name}`);
    }
    else {
        console.log('이름이 없습니다.');
    }
}
sayHi('홍길동');
// (숙제2) 함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력해주는 함수를 만들어보십시오.
// 예를 들어 '245' 이런 문자를 입력하면 3이 return 되어야합니다.
// 숫자도 마찬가지로 9567 이런 숫자를 입력하면 4가 return 되어야합니다.
// 숫자 또는 문자 이외의 자료가 들어오면 안됩니다. 
function problem2(a) {
    return a.toString().length;
}
problem2('123');
// (숙제3) 결혼 가능 확률을 알려주는 함수를 만들어봅시다.
// 1. 함수의 파라미터로 월소득(만원단위), 집보유여부(true/false), 매력점수 ('상' or '중' or '하') 를 입력할 수 있어야합니다. 
// 2. 월소득은 만원 당 1점, 집보유시 500점 & 미보유시 0점, 매력점수는 '상'일 때만 100점으로 계산합니다. 
// 3. 총 점수가 600점 이상일 경우 "결혼가능"을 return 해줘야합니다. 그 외엔 아무것도 return하지 않습니다.
function merry(money, home, charm) {
    let score = 0;
    let home2 = 0;
    let charm2 = 0;
    let merryYes = null;
    money = (money / 1) * 1;
    if (home == true) {
        home2 = 500;
    }
    if (charm == "상") {
        charm2 = 100;
    }
    score = money + home2 + charm2;
    if (score >= 600) {
        return merryYes = "결혼가능";
    }
    else {
        return false;
    }
}
merry(10000, true, "상");

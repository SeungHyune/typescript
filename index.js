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

let 자동차 = {
    wheel: 4,
    model: 'Tesla'
};
let 오토바이 = {
    wheel: 2,
    model: 'BMW'
};
console.log(자동차, 오토바이);
let 함수123 = (a) => {
    console.log(a);
};
함수123({ name: 'kim' });
// Generic
function numOutput(a) {
    console.log(a.length);
}
numOutput('hello');
numOutput(['kim', 'park']);
let data = '{"name" : "dog", "age" : 1 }';
function dataChange(data) {
    //let 변환 = JSON.parse(data)
    return JSON.parse(data);
}
console.log(dataChange(data));
//함수<Animal>(data)
class Person2 {
    name;
    constructor(a) {
        this.name = a;
    }
}
let a = new Person2(['123']);
console.log(a.name);
/** */
function 함수수(x) {
    return x[0];
}
let aa = 함수수([4, 2]);
let bb = 함수수(['4', '2']);
console.log(aa);
console.log(bb);
function interview(x) {
    return x.length;
}
console.log(interview('hello'));
export {};

function fn7(a) {
    // if(a && typeof a === 'string'){
    //     console.log(1)
    // }
    if (typeof a === 'string') {
        console.log(1);
    }
    else {
        console.log('undefined z');
    }
}
fn7();
let objFish = { swim: '123' };
let objBird = { fly: '1234' };
function fn8(animal) {
    if ('swim' in animal) {
        console.log('Fish', animal);
        return animal.swim;
    }
    console.log('Bird', animal);
    return animal.fly;
}
fn8(objBird);
// class로 생성된 object
const data = new Date();
const year = data.getFullYear();
console.log(data, year);
if (data instanceof Date) {
    console.log('맞지?');
}
let car8 = {
    wheel: '4개',
    color: 'pink'
};
let bike8 = {
    wheel: '2개',
    color: 'red'
};
function literal(a) {
    if (a.wheel === '4개') {
        console.log('car', a.color);
    }
    else {
        console.log('bike', a.color);
    }
}
literal({ wheel: '4개', color: 'pink' });
// never
// return 값이 없어야함
// endpoint가 없어야함
function never() {
    throw new Error('에러메세지');
    //while(trun){}
}
let never2 = function () {
    throw new Error('에러');
};
/****** 리턴하기 싫으면 :void 타입 쓰면 됌 */ 

type AnimalType = string | number | undefined;
let 동물 : AnimalType = 123;

type AnimalType2 = { name : string, age : number }
let 동물2 : AnimalType2 = { name : 'kim', age : 18 }


type Girlfriend = { name? : string }
const 여친 :Girlfriend = {
    name : '엠버'
}

여친.name = '유라'

type PositionX = { x : number };
type PositionY = { y : number };
type NewType = PositionX & PositionY;

let position:NewType = { x : 10, y : 20 }

type Test1 = { name : string }
type Test2 = { name : string }
type TestExtends = Test1 & Test2;


// (숙제1) object 타입을 정의한 type alias 두개를 & 기호로 합칠 때 중복된 속성이 있으면 어떻게 될까요?

// 그건 여러분들이 한번 테스트해보길 바랍니다. 

let test:TestExtends = { name : 'kim' };
console.log(test);


// (숙제2) 다음 조건을 만족하는 타입을 만들어봅시다. 

// 1. 이 타입은 object 자료형이어야합니다.
// 2. 이 타입은 color 라는 속성을 가질 수도 있으며 항상 문자가 들어와야합니다. 
// 3. 이 타입은 size 라는 속성이 있어야하며 항상 숫자가 들어와야합니다.
// 4. 이 타입은 position 이라는 변경불가능한 속성이 있어야하며 항상 숫자가 담긴 array 자료가 들어와야합니다.  
// type alias로 만들어보셈

type Obj = {
    color?:string,
    size :number,
    readonly position:number[]
}
let obj:Obj = {
    size : 123,
    position: [1,2,3],
}
console.log(obj)


// (숙제3) 다음을 만족하는 type alias를 연습삼아 간단히 만들어보십시오. 

// 1. 대충 이렇게 생긴 object 자료를 다룰 일이 많습니다. { name : 'kim', phone : 123, email : 'abc@naver.com' }
// 2. object 안에 있는 이름, 전화번호, 이메일 속성이 옳은 타입인지 검사하는 type alias를 만들어봅시다.
// 3. 각 속성이 어떤 타입일지는 자유롭게 정하십시오. 

type Info = { name : string, phone : number, email : string }
let info = { name : 'Jo', phone : 123, email : 'tmdgus7820@naver.com' }

// (숙제4). 다음을 만족하는 type alias를 만들어보십시오.

// 1. 숙제2와 똑같은데 이번엔 이름, 전화번호, 이메일, 미성년자여부 속성을 옳은 타입인지 검사하는 type alias를 만들어봅시다.
// 2. 미성년자 여부 속성은 true/false만 들어올 수 있습니다. 
// 3. 멋있게 숙제2에서 만들어둔  type alias를 재활용해봅시다.

type InfoPlus = Info & { isAdult : boolean }
let adult:InfoPlus = {
    name : 'Jo',
    phone : 123,
    email : 'tmdgus7820@naver.com',
    isAdult : true
}

console.log(adult)



// Literal Type

let 접니다:'솔로' | '졈니';
접니다 = '솔로';

function 함수(a:string, b:'hello'):1 | 0{
    console.log(a, b);
    return 1;
}
함수('hey','hello');

function 가위바위보(a:'가위' | '바위' | '보'):('가위' | '바위' | '보')[]{
    return [a]

}
가위바위보('바위')


// as const 문법

var 자료 = {
    name : 'kim'
} as const

function myFn(a:'kim'){
    return console.log(a)
}
myFn(자료.name);

type 함수타입 = (a : string) => number;

let fn : 함수타입 = function(){
    return 1
}

type Member = { name : string, plueOne : (a:number) => { number },  changeName : () => void }
let 회원정보 : Member = {
    name : 'kim',
    plusOne(a){
        return a + 1
    },
    changeName : () => { }
}

회원정보.plusOne(2);


// (숙제1) 위 코드에서 회원정보라는 변수에 타입지정 알아서 해보십시오. 

// - plusOne이라는 속성은 함수여야하고, 숫자를 넣어서 숫자를 뱉는 함수여야합니다.
// - changeName이라는 속성은 함수여야하고, 아무것도 return하면 안됩니다. 
// - type 키워드를 쓰든 말든 알아서 합시다. 

let cutZero = (a:string) => {

}
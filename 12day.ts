interface InfoObj12 {
    [key:string] : string | number 
}

let obj12 : InfoObj12 = {
    name : 'JSH',
    age : 30,
    height : 177,
}
console.log(obj12)

interface MyType {
    [key:string|'font-size'] : MyType | number
}

let css:MyType = {
    'font-size' : {
        'font-size' : {
            'font-size' : 14,
        }
    }
}

//console.log(css, css['font-size']['font-size']['font-size'])


interface CarType {
    [key : string] : number | string
}

let carObj:CarType = {
    model : 'k5',
    brand : 'kia',
    price : 6000,
    year : 2030,
    date : '6월',
    percent : '5%',
    dealer : '김차장',
}


interface FontType {
    'font-size' : number,
    [key : string] : FontType | number
}

let fontObj:FontType = {
    'font-size' : 10,
    'secondary' : {
      'font-size' : 12,
      'third' : {
        'font-size' : 14
      }
    }
}



interface lastObjType {
    age : number,
    name : string
}
type lastObjTypeKeys = keyof lastObjType;
let lastObj = {name : 'kim'}
console.log(Object.keys(lastObj))

type LastCar = {
    color : boolean,
    model : boolean,
    price : boolean | number
}

type TypeChanger<MyType> = {
    [key in keyof MyType] : string;
}

type LastCarCopy = TypeChanger<LastCar>

//

type Bus = {
    color : string,
    model : boolean,
    price : number
  }
type BusType<MyType, Type> = {
    [key in keyof MyType] : Type;
}
type BusCopy = BusType<Bus, string | number>

//
type LastAge<T> = T extends string ? string : unknown;
let a4 : LastAge<string> = 'A4용지';

// Q. 파라미터로 array 자료를 입력하면 array의 첫 자료의 타입을 그대로 남겨주고,
// array 자료가 아니라 다른걸 입력하면 any 타입을 남겨주는 타입은 어떻게 만들면 될까요?

type FirstItem<T> = T extends any[] ? T[0] : any;
let FirstType:FirstItem<string[]>

type 타입추출<T> = T extends (infer R)[] ? R : unknown
type a = 타입추출<string[]>

// (숙제1) 타입 파라미터로 

// array 타입을 입력하면 array의 첫 자료가 string이면 string 타입을 그대로 남겨주고 
// array의 첫 자료가 string이 아니면 unknown 을 남겨주려면 어떻게 타입을 만들어놔야할까요?

type LastClass1<T> = T extends [string, ...any] ? T[0] : unknown 

let age1 :LastClass1<[string, number]>;
let age2 :LastClass1<[boolean, number]>; 

// (숙제2) 함수의 파라미터의 타입을 뽑아주는 기계를 만들어보십시오. 

type TypeCopy<T> =  T extends (x:infer R) => any ? R : any;

type aaa = TypeCopy<(x :number) => void>
//타입뽑기<(x :string) => void>
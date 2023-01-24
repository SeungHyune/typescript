import { Car, Bike, Fn9 } from './9day-import'

let 자동차:Car = {
    wheel : 4,
    model : 'Tesla'
}

let 오토바이:Bike = {
    wheel : 2,
    model : 'BMW'
}

console.log(자동차, 오토바이)

let 함수123:Fn9 = (a) => {
    console.log(a)
}

함수123({name : 'kim'});


// Generic

function numOutput<T extends string | string[]>(a:T){
    console.log(a.length)
}

numOutput<string>('hello');
numOutput<string[]>(['kim', 'park']);



interface Animal {
    name : string;
    age : number 
  }
let data = '{"name" : "dog", "age" : 1 }'

function dataChange<T>(data:string):T{
    //let 변환 = JSON.parse(data)
    return JSON.parse(data)
}
console.log(dataChange<Animal>(data));
//함수<Animal>(data)



class Person2<T>{
    name;
    constructor(a:T){
        this.name = a;
    }
}
let a = new Person2<string[]>(['123']);
console.log(a.name)


/** */
function 함수수<Type>(x:Type[]):Type{
    return x[0]
}

let aa = 함수수<number>([4,2])
let bb = 함수수<string>(['4','2'])
console.log(aa)
console.log(bb)

interface lengthCheck{
    length : number;
}

function interview<Type extends lengthCheck>(x:Type){
    return x.length
}

console.log(interview<string>('hello'))
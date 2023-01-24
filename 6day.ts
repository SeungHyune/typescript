class Person {
    name:string;
    constructor(a : string){
        this.name = a;
    }
}

let 사람1 = new Person('kim');
let 사람2 = new Person('park');

console.log(사람1, 사람2);

class Car {
    model:string;
    price:number;
    constructor(carType:string, carPrice:number){
        this.model = carType;
        this.price = carPrice;
    }
    tax():number{
        return this.price / 10
    }
}

let car1 = new Car('소나타', 3000)
console.log(car1)
console.log(car1.tax())

class World {
    num:number[];
    str:string[];
    test;
    constructor(...a:(string | number)[]){
        this.num = [];
        this.str = [];
        this.test = a.forEach((data:string|number)=>{
            if(typeof data === 'number'){
                this.num.push(data)
            } else{
                this.str.push(data)
            }
        });
        
    }
}

let 오브젝트 = new World('kim', 3, 5, 'park')
console.log(오브젝트.num)
console.log(오브젝트.str)

// interface
type Square = { color : string, width : number }
interface Square2 { color : string, width : number }
let 네모 : Square2 = { color : 'red', width : 100 }


interface Stu{
    name :string
}
interface Tea extends Stu{
    age :number
}
let student :Stu = { name : 'kim' }
let teacher :Tea = { name : 'kim', age : 20 }

type Animal = { name:string }
type Cat = Animal & { age:number }


// interface Student{
//     name : string
// }
// interface Teacher extends Student{
//     age : number
// }

// let 오비지:Teacher = {name : 'kim', age : 18}

interface Product {
    brand : string,
    serialNumber : number,
    model : string[]
}
let 상품 : Product = { brand : 'Samsung', serialNumber : 1360, model : ['TV', 'phone'] }


interface Cart {
    product : string,
    price : number
}

interface Card extends Cart {
    card : boolean
}
let 장바구니:(Cart)[] = [ { product : '청소기', price : 7000 }, { product : '삼다수', price : 800 } ] 

let 카드추가:Card[] = [ { product : '청소기', price : 7000, card : false } ]


interface Plus {
    plus : (a:number, b:number)=> number,
    minus : (a:number, b:number)=> number
}

let ObjData : Plus = {
    plus : function(a, b){
        return a + b
    },
    minus : function(a, b){
        return a - b
    }
}

console.log(ObjData.plus(1,2))
console.log(ObjData.minus(1,2))


function fn6(...a : number[]){
    console.log(a)
}

fn6(1,5,3,5,6,6)

interface Obj3 {
    student:boolean,
    age:number
}

function obj3({student, age}:{student:boolean, age:number}){
    console.log(student, age)
}

obj3({student : true, age :  20})


function 최댓값(...a:number[]){
    let result = 0;
    a.forEach((i)=>{
        if(result < i){
            result = i
        }
    })
    return result
}

console.log(최댓값(6,3,7,2))


function 오뚜기({ user, comment, admin }:{user:string, comment : number[], admin:boolean}){
    console.log(user, comment, admin)
}
오뚜기( { user : 'kim', comment : [3,5,4], admin : false } )

type Array2 = (number | string | boolean)[]
function 어레이([a,b,c]:Array2){
    console.log(a,b,c)
}

어레이( [40, 'wine', false] )
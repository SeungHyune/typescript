import { Age } from './11day.d';

let num11:Age = 11;

declare let a:number;

console.log(a + 1);

// declare global {} 은 로컬 모듈에서만 사용가능 - 전역 타입 만들어주는 스코프
declare global {
    type Dog = string;
}

// 로컬 모듈로 만드는법
// import export 있으면 자동으로 로컬 모듈
export {}

//implements 키워드
interface CarType {
    model : string,
    price : number
}

class Car implements CarType{
    model : string;
    price : number = 1000;
    constructor(a :string){
      this.model = a
    }
  }
  let 붕붕이 = new Car('morning');
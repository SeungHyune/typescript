// 1
export type Car = {
    wheel : number,
    model : string
}
export interface Bike {
    wheel : 2,
    model : string
}

// 2
export type Fn9 = (a?:object) => void

// 3
namespace GoodDog{
    export type Dog = string;
}

namespace BadDog {
    export interface Dog { name : string };
}

let dog1 :GoodDog.Dog = 'bark';
let dog2 :BadDog .Dog = { name : 'paw' }
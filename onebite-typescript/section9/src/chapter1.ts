/**
 * 분산적인 조건부 타입
 */

type 분산방지타입<T> = [T] extends number ? string : number;
let 분산방지타입테스트: 분산방지타입<number | boolean>;

type StringNumberSwitch<T> = T extends number ? string : number;

let strA: StringNumberSwitch<number> = 'string';
let numA: StringNumberSwitch<string> = 1;

// 타입 변수에 유니온 타입을 할당하게 되면 한번은 number 타입만 있는 걸로 한번은 string 타입만 있는 걸로 
let c: StringNumberSwitch<number | string>;
// StringNumberSwitch<number>
// StringNumberSwitch<string>

let d: StringNumberSwitch<boolean | number | string>
//StringNumberSwitch<boolean> // number
//StringNumberSwitch<number> // string
//StringNumberSwitch<string> // number

// 최종 결과
// number | string

/**
 * 실용적인 예제
 */

type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;
// Exclude - T: number, U: string // number
// Exclude - T: string, U: string // never
// Exclude - T: boolean, U: string // boolean

// 결과
// number | never | boolean

// 하지만 유니온 타입에 never 타입이 포함되어 있으면 never 타입은 사라집니다.

// 최종 결과
// number | boolean

type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>
// Extract - T: number, U: string // never
// Extract - T: string, U: string // string
// Extract - T: boolean, U: string // never

// 결과
// string | never
// 하지만 유니온 타입에 never 타입이 있다면 never은 사라집니다.

// 최종 결과
// string
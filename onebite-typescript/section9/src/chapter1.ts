/**
 * 분산적인 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number>;

let b: StringNumberSwitch<string>;

let c: StringNumberSwitch<number | string>;
// StringNumberSwitch<number> |
// StringNumberSwitch<string>

let d: StringNumberSwitch<boolean | number | string>;
// 1 단계
// StringNumberSwitch<boolean> |
// StringNumberSwitch<number> |
// StringNumberSwitch<string>

// 2 단계
// number |
// string |
// number

// 결과
// number | string

type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;
// 1 단계
// Extract<number, string> |
// Extract<string, string> |
// Extract<boolean, string>

// 2 단계
// never |
// string |
// never

// 최종 결과
// string


// 분산 방지
type StringNumberSwitch1<T> = [T] extends [number] ? string : number;
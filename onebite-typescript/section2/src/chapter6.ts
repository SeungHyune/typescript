// any
// 특정 변수의 타입을 우리가 확실히 모를때

let anyVar: any = 10;

let num: number = 10;
num = anyVar;
anyVar = 'string으로 변경 !!';
anyVar = 28;
anyVar = true;
anyVar = () => {};
anyVar = undefined;
anyVar = null;

let string: string = '조승현';

let bool1: boolean = true;

// unknown
let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// 타입 정제 (타입 좁히기)
if (typeof unknownVar === "number") {
    num = unknownVar;
} else if(typeof unknownVar === 'string') {
    string = unknownVar;
} else if(typeof unknownVar === 'boolean') {
    bool1 = unknownVar;
}

/**
 * 조건부 타입
 */

type A = number extends string ? string : number; // number

type ObjA = {
    a: number;
}

type ObjB = {
    a: number;
    b: number;
};

type B = ObjB extends ObjA ? number : string; // number

/**
 * 제네릭과 조건부 타입
 */
type StringNumberSwitch<T> = T extends number ? string : number;

let strA: StringNumberSwitch<number> = 'string';
let numA: StringNumberSwitch<string> = 1;

function removeSpaces<T>(text: T): T extends string ? string : undefined
function removeSpaces(text: any) {
    if(typeof text === 'string') {
        return text.replaceAll(" ", "");
    } else {
        return undefined;
    }
}

let result = removeSpaces('Hi I am Rekoding!');

let result2 = removeSpaces(undefined);
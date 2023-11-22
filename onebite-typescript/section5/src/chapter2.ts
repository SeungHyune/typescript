/**
 * 선언 합침
 */


// type 별칭의 경우 동일한 이름으로 재선언이 불가하다.
// type Person = {
//     name: string;
// };

// type Person = {
//     age: number;
// }

// interface는 동일한 이름으로 재선언이 가능하고 선언된 프로퍼티가 합쳐진다.
interface Person {
    name: string;
}

interface Person {
    name: string; // 선언 합침의 경우 동일한 프로퍼티를 선언할 때 처음에 선언된 속성과 동일하게 선언되어야 한다. (서브타입으로 변경해도 불가능)
    age: number;
}

const person: Person = {
    name: '조승현',
    age: 28
}

/**
 * 모듈 보강
 */

interface Lib {
    a: number;
    b: number;
}

interface Lib {
    c: string;
}

const lib: Lib = {
    a: 1,
    b: 2,
    c: 'hello'
}
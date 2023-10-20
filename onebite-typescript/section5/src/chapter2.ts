/**
 * 선언 합침
 */

interface Person {
    name: string;
}

interface Person {
    name: string;
    age: number
}

interface Developer extends Person {
    name: 'hello';
}

const person: Person = {
    name: '',
    age: 28
}

/**
 * 모듈 보강
 */

interface Lip {
    a: number;
    b: number
}

interface Lip {
    c: string
}

const lip: Lip = {
    a: 1,
    b: 2,
    c: 'Hello'
}
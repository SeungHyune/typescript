/**
 * 인터페이스
 */

interface Person {
    name: string;
    age?: number; // 선택적 프로퍼티 - 있어도 되고 없어도 되고
    sayHi(): void;
    sayHi(a: number, b: number): void;
}

type Type1 = number | string;
type Type2 = number & string;

const person: Person = {
    name: '조승현',
    age: 28,
    sayHi: function() {
        console.log('Hi');
    }
}

person.sayHi();
person.sayHi(1, 2);
/**
 * keyof 연산자
 * - keyof 연산자는 반드시 뒤에 타입이 와야 사용 가능하다.
 */

interface Person {
    name: string;
    age: number;
}

function getPropertyKey(person: Person, key: keyof Person) {
    return person[key];
}

const person: Person = {
    name: '조승현',
    age: 28,
};

getPropertyKey(person, 'name'); // 조승현

type Person2 = typeof person;

function getPropertyKey2(person: Person2, key: keyof typeof person2) {
    return person[key];
}

const person2 = {
    name: '조승현',
    age: 28,
}

getPropertyKey2(person2, 'name'); // 조승현

/**
 * keyof 연산자
 * - keyof 연산자는 반드시 뒤에 타입이 와야 사용 가능하다.
 */

type Person = typeof person;

function getPropertyKey(person: Person, key: keyof typeof person) {
    return person[key];
}

const person = {
    name: '조승현',
    age: 28
};

getPropertyKey(person, 'name'); // 조승현
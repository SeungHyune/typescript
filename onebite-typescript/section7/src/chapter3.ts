/**
 * 제네릭 인터페이스(Generic Interface)
 */

// K, V = 타입 변수
interface KeyPair<K, V> {
    key: K,
    value: V
}

// 재네릭 인터페이스로 사용할 때 <> 안에 타입을 명시적으로 작성해주어야 한다.
let keyPair: KeyPair<string, number> = {
    key: '1',
    value: 1
}

let keyPair2: KeyPair<boolean, string[]> = {
    key: true,
    value: ['a', 'b']
}


/**
 * 인덱스 시그니처
 */

interface NumberMap {
    [key: string]: number;
}

let numberMap1: NumberMap = {
    key: 123,
    age: 111,
    id: 000
}

interface Map<V> {
    [key: string]: V;
}

let stringMap: Map<string> = {
    key: '키',
}

let booleanMap: Map<boolean> = {
    key: true,
}

/**
 * 제네릭 타입 별칭
 */

type Map2<V> = {
    [key: string]: V;
};

let stringMap2: Map2<string> = {
    key: 'hello',
}

/**
 * 제네릭 인터페이스의 활용 예시
 * - 유저 관리 프로트램
 * - 유저 구분: 학생 / 개발자
 */

interface Student {
    type: 'student';
    school: string;
}

interface Developer {
    type: 'developer';
    skill: string;
}

interface User<T> {
    name: string;
    profile: T
}

const developerUser: User<Developer> = {
    name: '조승현',
    profile: {
        type: 'developer',
        skill: 'TypeScript',
    }
}

const studentUser: User<Student> = {
    name: '조승현2',
    profile: {
        type: 'student',
        school: '서운대학교',
    }
}

function goToSchool(user: User<Student>) {
    const school = user.profile.school;
    console.log(`${school}로 등교 완료 !!`);
}

goToSchool(studentUser);
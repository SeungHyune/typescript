/**
 * 제네릭 인터페이스
 */

//타입 변수 - K, V
// 제네릭 인터페이스의 타입 변수는 <>로 타입 선언 시 미리 지정해줘야 한다.
interface KeyPair<K, V> {
    key: K;
    value: V;
}

let keypair: KeyPair<string, number> = {
    key: 'key',
    value: 0,
}

let keypair2: KeyPair<boolean, string[]> = {
    key: true,
    value: ['1', '2', '3'],
}

/**
 * 인덱스 시그니처
 */

interface NumberMap {
    [key: string]: number;
}

let numberMap1: NumberMap = {
    key: 1234,
    key2: Infinity
}

interface Map<V> {
    [key: string]: V;
}

let stringMap: Map<string> = {
    key: '테스트',
    food: 'pizza'
}

let foodMap: Map<boolean> = {
    key: true,
}

/**
 * 제네릭 타입 별칭
 */
// 제네릭 인터페이스와 동일하게 타입 선언 시 <> 타입을 미리 선언해 주어야 한다.
type Map2<V> = {
    [key: string]: V
}

let stringMap2: Map2<string> = {
    key: 'key',
}

/**
 * 제네릭 인터페이스의 활용 예시
 * - 유저 관리 프로그램
 * - 유저구분: 학생 유저 / 개발자 유저
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
        skill: 'JavaScript'
    }
}

const studentUser: User<Student> = {
    name: '길동이',
    profile: {
        type: 'student',
        school: '중앙대학교'
    }
}

function goToSchool(user: User<Student>) {
    if(user.profile.type !== 'student') {
        console.log('잘 못 오셨습니다.');
        return;
    }

    const school = user.profile.school;
    console.log(`${school}로 등교 완료 !`);
}

goToSchool(studentUser);

function skillUp(user: User<Developer>) {
    const skill = user.profile.skill;
    console.log(`당신은 ${skill}에 재능이 있으신구요?`)
}

skillUp(developerUser);
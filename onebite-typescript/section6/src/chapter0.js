/**
 * 클래스
 */

let studentA = {
    name: '조승현',
    grade: 'A+',
    age: 27,
    study() {
        console.log('열심히 공부 함');
    },
    introduce() {
        console.log('안녕~~');
    },
};

// let studentB = {
//     name: '홍길동',
//     grade: 'B+',
//     age: 20,
//     study() {
//         console.log('열심히 공부 함');
//     },
//     introduce() {
//         console.log('안녕~~');
//     },
// }

class Student {
    // 필드
    name;
    grade;
    age;

    // 생성자
    constructor(name, grade, age) {
        this.name = name;
        this.grade = grade;
        this.age = age;
    }

    // 메서드
    study() {
        console.log(`열심히 공부해서 ${this.grade} 학점 맞음`)
    }

    introduce() {
        console.log(`안녕하세요 ${this.name}입니다.`);
    }
}

// 클래스를 이용해서 만든 객체 - 인스턴스
// 스튜던트 인스턴스
let studentB = new Student('조승현', 'A+', 27);
let studentC = new Student('테스트', 'B-', 40);

console.log(studentB);
studentB.study();
studentB.introduce();
console.log(studentC);

class StudentDeveloper extends Student {
    // 필드
    favoriteSkill;

    // 생성자
    constructor(name, grade, age, favoriteSkill) {
        super(name, grade, age);
        this.favoriteSkill = favoriteSkill;
    }

    programming() {
        console.log(`${this.favoriteSkill} 공부하는 거 좋아함`)
    }
}

const studentDeveloper = new StudentDeveloper('조승현', 'A', 28, 'JavaScript');
const studentDoctor = new StudentDeveloper('김의사', 'A+', 30, '전공');

console.log(studentDeveloper);
studentDeveloper.programming();
console.log(studentDoctor);
studentDoctor.programming();
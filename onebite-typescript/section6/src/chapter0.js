/**
 * 클래스
 */

let studentA = {
    name: '조승현',
    grade: 'A',
    age: 28,
    study() {
        console.log('열심히 공부 함');
    },
    introduce() {
        console.log('안녕하세요!');
    },
};

class StudentDeveloper {
    // 필드
    name;
    grade;
    age;
    favoriteSkill;

    // 생성자
    constructor(name, grade, age, favoriteSkill) {
        this.name = name;
        this.grade = grade;
        this.age = age;
        this.favoriteSkill = favoriteSkill;
    }

    // 메서드
    study() {
        console.log('열심히 공부 함')
    }

    introduce() {
        console.log(`안녕하세요 ${this.name} 입니다!`)
    }

    programming() {
        console.log(`${this.favoriteSkill}로 프로그래밍 함`);
    }
}

const studentDeveloper = new StudentDeveloper('조승현', 'A', 28, 'TypeScript');
console.log(studentDeveloper);
studentDeveloper.programming();

// 클래스를 이용해서 만든 객체 -> 인스턴스
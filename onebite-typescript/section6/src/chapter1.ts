/**
 * 타입스크립트의 클래스
 */

const employee = {
    name: '조승현',
    age: 28,
    position: 'developer',
    work() {
        console.log('일함');
    },
};

class Employee {
    // 필드
    name: string;
    age: number;
    position: string;

    // 생성자
    constructor(name: string, age: number, position: string) {
        this.name = name;
        this.age = age;
        this.position = position;
    }

    // 메서드
    work() {
        console.log('일함');
    }
}

class ExecutiveOfficer extends Employee {
    // 필드
    officeNumber: number;

    // 생성자
    constructor(name: string, age: number, position: string, officeNumber: number) {
        super(name, age, position);
        this.officeNumber = officeNumber;;
    }
}

const employeeB = new Employee('조승현', 28, 'developer');
console.log(employeeB);

// 타입스크립트의 클래스는 타입으로도 활용할 수 있다.
const employeeC: Employee = {
    name: '조승현',
    age: 28,
    position: '프론트엔드 개발자',
    work() {
        console.log('일하는 중')       
    }
}
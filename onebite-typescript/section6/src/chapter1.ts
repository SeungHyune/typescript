/**
 * 타입스크립트 클래스
 */

const employee = {
    name: '조승현',
    age: 28,
    position: 'developer',
    work() {
        console.log('프로그래밍함');
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
    officerNumber: number;

    // 생성자
    constructor(
        name: string, 
        age: number, 
        position: string, 
        officerNumber: number
    ) {
        super(name, age, position);
        this.officerNumber = officerNumber;
    }
}

const employeeB = new Employee('조승현', 26, 'developer');
console.log(employee);

const employeeC: Employee = {
    name: '',
    age: 0,
    position: '',
    work() { }
}
/**
 * 타입스크립트의 클래스
 */

const employee = {
    name: "김영현",
    age: 30,
    position: "app developer",
    work(){
        console.log('열심히 일하는 중');
    }
}

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
    work(){
        console.log('열심히 일하는 중');
    }
}

class ExecutiveOfficer extends Employee {
    // 필드
    officeNum: number;

    // 생성자
    constructor(name: string, age: number, position: string, officeNum: number) {
        super(name, age, position);
        this.officeNum = officeNum;
    }
}

const employeeA = new Employee("김영현", 30, "app developer");
employeeA.work();

// 타입스크립트에서 클래스는 타입으로도 사용 가능함
const employeeB: Employee = {
    name: "",
    age: 0,
    position: "",
    work() {
    }
}

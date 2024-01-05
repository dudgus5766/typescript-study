/**
 * 접근 제어자
 * access modifier
 */

class Employee {
    // 필드
    // public name: string;
    // protected age: number;
    // private position: string;

    // 생성자
    constructor(public name: string, protected age: number, private position: string) {
        // this.name = name;
        // this.age = age;
        // this.position = position;
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

    // 메서드
    work(){
        console.log(`${this.age}까지 일할 듯`); // protected라는 접근 제어자는 외부에선 접근이 불가하지만 파생 클래스 내부에서는 접근이 가능
        // console.log(`${this.position}으로 일할 듯`); // private은 파생 클래스 내부에서도 접근 불가
    }
}

const employee = new Employee("김영현", 30, "개발자");
employee.name = "홍길동";
// employee.age = 20;
// employee.position = "기획자"; // private은 readOnly도 아님 -> 읽을 수도 없음

console.log(employee);

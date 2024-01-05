/**
 * 클래스
 */

let studentA = {
    name: "김영현",
    grade: "A+",
    age: 30,
    study() {
      console.log("열심히 공부함");
    },
    introduce() {
      console.log("안녕하세요~")
    }
}

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
        console.log("열심히 공부함");
    }

    introduce() {
        console.log(`안녕하세요~ ${this.name}입니다.`);
    }
}

// 클래스를 이용해 만든 객체 = 인스턴스
// 스튜던트 인스턴스
let studentB = new Student("김영현", "A+", 30);
studentB.study();
studentB.introduce();


class StudentDevelop extends Student{
    // 필드
    favoriteSkill;

    // 생성자
    constructor(name, grade, age, favoriteSkill) {
        super(name, grade, age);
        this.favoriteSkill = favoriteSkill;
    }

    // 메서드
    programming(){
        console.log(`${this.favoriteSkill}로 개발함`);
    }
}


const studentDeveloper = new StudentDevelop("김영현", "A", 30, "react-native");
studentDeveloper.programming();

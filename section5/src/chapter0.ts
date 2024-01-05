/**
 * 인터페이스
 */

interface Person {
    name: string;
    age: number;
    sayHi(): void;
    sayHi(a: number, b: number): void; // 오버로드 시그니처는 호출 시그니처를 써야함
}

type Type1 = number | string | Person;

const person: Person = {
    name: "영현",
    age: 30,
    sayHi: function (){
        console.log('hi~')
    }
};


person.sayHi();
person.sayHi(1, 2);

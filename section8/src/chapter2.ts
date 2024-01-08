/**
 * keyof 연산자
 */

// interface Person {
//     name: string;
//     age: number;
// }

type Person = typeof person; // person 변수의 타입을 추론하여 타입 별칭에 정의해줌
function getPropertyKey(person: Person, key: keyof Person){
    return person[key];
}

const person = {
    name: "김영현",
    age: 30,
}

getPropertyKey(person, "name");

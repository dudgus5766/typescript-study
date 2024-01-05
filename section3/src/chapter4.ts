/**
 * 대수 타입
 * -> 여러 개의 타입을 합성해서 새롭게 만들어낸 타입
 */

/**
 * 1. 합집합 - Union 타입
 */

let a: string | number | boolean;
a = 1;
a = "hello";
a = true;

let arr: (number | string | boolean)[] = [1, "hello", false];


type Union1 = Dog | Person;

let union1: Union1 = {
    name: "김영현,",
    color: "black",
}

let union2: Union1 = {
    name: "돌돌이",
    language: "ko",
}

let union3: Union1 = {
    name: "",
    color: "",
    language: "",
}

// let union4: Union1 = {
//     name: "",
// }


/**
 * 2. 교집합 타입
 */

let variable: number & string;

type Dog = {
    name: string;
    color: string;
}

type Person = {
    name: string;
    language: string;
}

type Intersection = Dog & Person;

let intersection: Intersection = {
    name: "",
    color: "",
    language: "",
}

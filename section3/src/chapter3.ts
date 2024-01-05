/**
 * 기본 타입간의 호환성
 */

let num1: number = 10;
let num2: 10 = 10;

num1 = num2; // 업캐스팅이기 때문에 가능
// num2 = num1; // 불가

/**
 * 객체 타입간의 호환성
 * -> 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?
 * 객체타입을 정의하는 방법을 보면 타입스크립트는 프로퍼티를 기준으로 타입을 정의하는 '구조적 타입시스템'을 따름
 */

type Animal = {
    name: string;
    color: string;
}

type Dog = {
    name: string;
    color: string;
    breed: string;
}

let animal: Animal = {
    name: "기린",
    color: "yellow",
}

let dog: Dog = {
    name: "돌돌이",
    color: "black",
    breed: "진도"
}

animal = dog;

// dog = animal;


type Book = {
    name: string;
    price: number;
}

type ProgrammingBook = {
    name: string;
    price: number;
    skill: string;
}

let book: Book;
let programmingBook: ProgrammingBook = {
    name: "react 공부하기",
    price: 10000,
    skill: "reactjs"
}

book = programmingBook;
// programmingBook = book;

/**
 * 초과 프로퍼티 검사
 */

let book2: Book = {
    name: "NEXT.js 공부하기",
    price: 30000,
    // skill: "NEXT.js",
}

let book3: Book = programmingBook;

function func(book: Book) {}

func(programmingBook);

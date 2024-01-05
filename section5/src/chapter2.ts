/**
 * 선언 합침
 * 동일한 이름으로 선언한 interface는 다 합쳐짐
 */

interface Person {
    name: string;
}

interface Person {
    age: number;
}

const person: Person = {
    name: "",
    age: 1,
}


/**
 * 모듈 보강
 */

interface Lib {
    a: number;
    b: number;
}
interface Lib {
    c: string;
}

const lib: Lib = {
    a: 1,
    b: 2,
    c: "hello",
}

// 배열
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ["hello", "Im", "YH"];

let boolArr: Array<Boolean> = [true, false, true];


// 배열 요소가 다양할 경우
let multiArr: (string | number)[] = [1, "hello"];


// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
    [1, 2, 3],
    [4, 5],
]

// 튜플 타입
// 길이와 타입이 고정된 배열
let tupArr: [number, number] = [1, 2];
tupArr = [1, 3];

let tupArr2: [number, string, boolean] = [1, "hello", true];

const users: [string, number][] = [
    ["김영현", 1],
    ["김영한", 2],
    ["김영훈", 3],
    ["김영황", 4],
]

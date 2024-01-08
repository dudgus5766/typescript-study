/**
 * 분산적 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number>;
let b: StringNumberSwitch<string>;

let c: StringNumberSwitch<number | string>; // 한번은 number타입으로, 한번은 string타입으로 분리가 됨

/**
 * 실용적 예제
 */

type Exclude<T, U> = T extends U ? never : T; // 타입변수 T가 타입변수 U의 서브타입이라면 never, 아니면 T

type A = Exclude<number | string | boolean, string>;
// 1단계
// Exclude<number, string> |
// Exclude<string, string> |
// Exclude<boolean, string>

// 2단계 결과값
// number |
// never |
// boolean

// 결과
// number | boolean
// never는 공집합이기 때문에 없어짐 -> 분산적인 조건부 타입을 이용해서 특정 유니온타입(number | string | boolean)으로부터 특정타입(string)만 제거한 유니온 타입을 얻어낼 수 있음


/**
 * 예제 2
 */

type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;
// 1단계
// Extract<number, string> |
// Extract<string, string> |
// Extract<boolean, string>

// 2단계 결과값
// never |
// string |
// never

// 결과
// string
// 분산적인 조건부 타입을 이용해서 특정 유니온타입(number | string | boolean)으로부터 특정타입(string)만 뽑은 타입을 얻어낼 수 있음

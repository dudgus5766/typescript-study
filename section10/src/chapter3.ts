/**
 * 조건부 타입 기반의 유틸리티 타입
 */

/**
 * Exclude<T, U>
 * -> 제외하다
 * -> T에서 U를 제거하는 타입
 */

type Exclude<T, U> = T extends U ? never : T;
// 1단계
// Exclude<string, boolean> |
// Exclude<number, boolean> |
// Exclude<boolean, boolean>

// 2단계
// string |
// number |
// never

// 최종으로
// string | number

type A = Exclude<string | number | boolean, boolean>;


/**
 * Extract<T, U>
 * -> T에서 U를 추출하는 타입
 */

type Extract<T, U> = T extends U ? T : never;

type B = Extract<string | number, number>;


/**
 * ReturnType<T>
 * -> 함수의 반환값 타입을 추출하는 타
 */

type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : never;

function funcA(msg = "hi"){
    return msg;
}

function funcB(){
    return 2;
}

type ReturnA = ReturnType<typeof funcA>;
type ReturnB = ReturnType<typeof funcB>;

// any
// 특정 변수의 타입을 우리가 모를때
// 타입 검사를 하지 않지만 런타임에 에러를 발생시키기 때문에 any를 지양해야 함

let anyVar: any = 10;
anyVar = "아무거나";

// unknown
let unknownVar: unknown;
unknownVar = "이것도 아무거나";
unknownVar = 1;

// any unknown 차이
// 다른 모든 타입의 변수에 unknown 타입의 값을 집어 넣을 수 없음

let num: number = 10;
num = anyVar; // any 가능
// num = unknownVar; // unknown 불가능

// unknownVar.toUpperCase(); // number 메소드도 사용 불가

if(typeof unknownVar === "number"){
    num = unknownVar;
}

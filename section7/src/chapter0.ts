/**
 * 제네릭
 */

// 제네릭 함수
// 함수의 인수에 따라 반환값의 타입을 가변적으로 정의해줄 수 있음
// 타입 변수(T)는 함수가 호출될 때 인수의 타입에 따라 정해짐
function func<T>(val: T){
    return val;
}

let num = func(10);
let bool = func(true);
let arr = func<[number, number, number]>([1, 2, 3]); //튜플 타입으로 추론도 가능 -> 명시적

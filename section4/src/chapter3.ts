/**
 * 함수 오버로딩
 * 하나의 함수를 매개변수의 개수나 타입에 따라 여러가지 버전으로 만드는 문법
 */


// 함수 func
// 모든 매개변수의 타입은 number
// 매개변수 1개 -> 이 매개변수에 20을 곱한 값 출력
// 매개변수 3개 -> 이 매개변수들을 다 더한 값 출력


// 버전(오버로드 시그니처)
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 실제 구현부(구현 시그니처)
function func(a: number, b?: number, c?: number): void{
    if(b !== undefined && c !== undefined){
        console.log(a + b + c);
    }else {
        console.log(a * 20);
    }
}

// func 함수가 오버로드 시그니처를 가지고 있다면
// 함수를 호출했을 때 인수들의 타입이 구현부에 정의된 매개변수의 개수나 타입을 따르지 않고
// 오버로드 시그니처의 하나의 버전을 따라가게 됨
// func(); // error!
func(1);
// func(1, 2); // error!
func(1, 2, 3);

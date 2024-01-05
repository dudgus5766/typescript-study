/**
 * 함수 타입 정의
 */

function func(a: number, b: number): number{
    return a + b;
}

/**
 * 화살표 함수 타입 정의
 */

const add = (a: number, b: number): number => a + b;

/**
 * 함수의 매개변수
 * 필수 매개변수는 항상 선택적 매개변수가 앞에 위치해야 함
 */

function introduce(name = "김영현", age?: number){
    console.log(`name: ${name}`);
    if(typeof age === 'number'){
        console.log(`age: ${age + 1}`);
    }
}

introduce("김영현", 30);
introduce("김영현");

function getSum(...rest: number[]){
    rest.reduce((a, b)=> a + b);
}

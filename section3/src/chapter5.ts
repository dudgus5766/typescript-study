/**
 * 타입 추론
 * -> 점진적 타입시스템 적용하기 때문에 추론 가능
 */

// 변수 타입 추론은 초기값으로 추론
let a = 10; // number타입으로 추론
let b = "hello"; // string타입으로 추론
let c = {
    id: 1,
    name: "young",
    profile: {
        nickname: "rhfovk",
    },
}

let {id, name, profile} = c; // 구조분해할당에서도 타입 추론

// 함수에서는 return문을 기준으로 반환값을 가지고 타입 추론
function func(){
    return "hello";
}

// 변수를 선언하고 초기값을 지정하지 않으면 암묵적인 any타입으로 추론
// 변수에 들어가는 값에 따라 타입이 바뀜
let d;
d = 10;
d = "hello";
d = true;

// const로 선언시에는 어차피 상수로 선언되기 때문에 리터럴 값으로 추론
const num = 10;
const str = "hello";

let arr = [1, "string"];

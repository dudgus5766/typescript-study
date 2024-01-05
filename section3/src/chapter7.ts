/**
 * 타입 좁히기(타입가드)
 * 조건문 등을 이용해 넓은타입에서 좁은타입으로 좁히는 방법
 */

// function func(value: number | string){
//     value;
//
//     // value 값에 따라 좁은타입으로 -> 타입가드
//     if(typeof value === 'number'){
//         value.toFixed();
//     }
//     else if(typeof value === 'string'){
//         value.toUpperCase();
//     }
// }

type Person = {
    name: string;
    age: number;
}

function func(value: number | string | Date | null | Person){
    value;

    // value 값에 따라 좁은타입으로 -> 타입가드
    if(typeof value === 'number'){
        value.toFixed();
    }
    else if(typeof value === 'string'){
        value.toUpperCase();
    }
    // else if(typeof value === 'object'){
    //     value.getDate(); //error!
    // }
    else if(value instanceof Date){
        value.getDate();
    }
    else if(value && 'age' in value){
        console.log(value.age);
    }
}

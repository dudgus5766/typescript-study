/**
 * map 메서드 타입 정의
 */

const arr = [1, 2, 3];
const arr2 = ['Hi', 'Hello'];
const newArr = arr.map((it) => it + 1);


function map <T, U>(arr: T[], callback: (item: T)=> U){
    let result = [];
    for(let i = 0; i < arr.length; i++){
        result.push(
            callback(arr[i])
        );
    }

    return result;
}

map(arr,  (it) => it + 1);
map(arr2,  (it) => parseInt(it));


/**
 * forEach 메서드 타입 정의
 */

arr.forEach((it) => console.log(it));

function forEach<T, U>(arr: T[], callback: (item: T) => U){
    let result = [];
    for(let i = 0; i < arr.length; i++){
        result.push(callback(arr[i]))
    }
    return result;
}

forEach(arr, (it) => console.log(it));


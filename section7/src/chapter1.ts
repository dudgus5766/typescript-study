/**
 * 첫번째 사례
 */

// 인수의 개수에 따라 여러 개를 사용할 수 있음
function swap<T, U>(a: T, b: U){
    return [b, a];
}

const [a, b] = swap('1', 2);


/**
 * 두번째 사례
 */

function returnFirstVal<T>(data: [T, ...unknown[]]){
    return data[0];
}

let num = returnFirstVal([1, 2, 3]);
let str = returnFirstVal([1, 'im', 'young']);


/**
 * 세번째 사례
 */

function getLength<T extends {length: number}>(data: T){
    return data.length;
}

let var1 = getLength([1, 2, 3]);
let var2 = getLength("12345");
let var3 = getLength({length: 10});

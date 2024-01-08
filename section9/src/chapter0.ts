/**
 * 조건부 타입
 * 삼항연산자를 통해 조건에 따라 타입을 결정
 */
import {type} from "os";

type A = number extends string ? string : number;

type ObjA = {
    a: number;
}

type ObjB = {
    a: number;
    b: number;
}

type B = ObjB extends ObjA ? number : string;


/**
 * 제네릭과 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number> = 'hello';
let varB: StringNumberSwitch<string> = 1;

function removeSpaces<T>(text: T): T extends string ? string : undefined; // 오버로드 시그니처
function removeSpaces(text: any){
    if(typeof text === 'string'){
        return text.replaceAll(" ", "");

    }else {
        return undefined;
    }
}

let result = removeSpaces("hi hello~~~");
result.toUpperCase();

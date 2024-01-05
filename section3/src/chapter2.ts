/**
 * Unknown 타입
 */

function unknownExam(){
    let a: unknown = 1;
    let b: unknown = "hello";
    let c: unknown = true;
    // unknown 타입이 슈퍼타입이기 때문에 모든 타입이 업캐스팅이 가능

    let unknownVar: unknown;

    // let num: number = unknownVar;
    // let str: string = unknownVar;
    // let bool: boolean = unknownVar;
    // 다운캐스팅은 불가능
}

/**
 * Never 타입
 * 집합으로 따지면 공집합
 */

function neverExam(){

    function neverFunc(): never {
        while (true){}
    }

    let num: number = neverFunc();
    let str: string = neverFunc();
    let bool: boolean = neverFunc();

    // let never1: never = 1;
    // let never2: string = "hello";
    // let never3: boolean = true;
}

/**
 * Void 타입
 */

function voidExam(){
    function voidFunc(): void {
        console.log('void');
    }

    let voidVar: void = undefined;
}

/**
 * Any 타입
 * 모든 타입의 슈퍼타입으로도 위치할 수 있고, 모든 타입의 서브타입으로도 존재 가능 (never 예외)
 */

function anyExam(){
    let unknownVar: unknown;
    let anyVar: any;
    let undeVar: undefined;
    let neverVar: never;

    anyVar = unknownVar; // any타입 한정으로 unknown타입도 다운캐스팅 가능
    undeVar = anyVar;
    // neverVar = anyVar; // never타입은 순수한 공집합이기 때문에 never타입의 변수에는 어느 타입도 다운캐스팅이 불가
}

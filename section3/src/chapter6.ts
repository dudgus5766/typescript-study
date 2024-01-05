/**
 * 타입 단언
 */

type Person = {
    name: string;
    age: number;
}

let person = {} as Person;
person.name = "영현";
person.age = 30;

type Dog = {
    name: string;
    color: string;
}

let dog = {
    name: "돌돌이",
    color: "brown",
    breed: "진도",
} as Dog;


/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타이어야 함
 */

let num1 = 10 as never;
let num2 = 10 as unknown;

let num3 = 10 as unknown as string; // 다중선언으로는 가능 그러나 지양해야 함

/**
 * const 단언
 */

let num4 = 10 as const;

let cat = {
    name: "cat",
    color: "yellow",
} as const;


/**
 * Non Null 단언
 */

type Post = {
    title: string;
    author?: string;
}

let post: Post = {
    title: "게시글1",
    author: "영현",
}

const len: number = post.author!.length; // null이거나 undefined가 아니라고 해줌



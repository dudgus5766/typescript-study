// let user: object = {
//     id: 1,
//     name: "김영현",
// };

// 객체 리터럴 타입으로 정의
let user: { id?: number, name: string } = {
    id: 1,
    name: "김영현",
};

user = {
    ...user,
    name: "김아무개",
}

let dog: { name: string, color: string } = {
    name: "돌돌",
    color: "black"
}

let config: { readonly apiKey: string } = {
    apiKey: "API KEY"
}

// config.apiKey = "API KEY2";


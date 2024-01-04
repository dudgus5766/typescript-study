// let user: object = {
//     id: 1,
//     name: "김영현",
// };
// 객체 리터럴 타입으로 정의
let user = {
    id: 1,
    name: "김영현",
};
user = {
    ...user,
    name: "김아무개",
};
let dog = {
    name: "돌돌",
    color: "black"
};
let config = {
    apiKey: "API KEY"
};
export {};
// config.apiKey = "API KEY2";

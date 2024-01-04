// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
var Language;
(function (Language) {
    Language["korea"] = "ko";
    Language["english"] = "us";
})(Language || (Language = {}));
const user1 = {
    name: "김영현",
    role: Role.ADMIN, // 0 <- 관리자
    language: Language.korea,
};
const user2 = {
    name: "유저김영현",
    role: Role.USER,
    language: Language.english,
};
const user3 = {
    name: "게스트김영현",
    role: Role.GUEST,
};
export {};

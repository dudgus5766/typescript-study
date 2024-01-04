// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
    ADMIN = 0,
    USER = 1,
    GUEST = 2,
}

enum Language {
    korea = 'ko',
    english = 'us',
}

const user1 = {
    name: "김영현",
    role: Role.ADMIN, // 0 <- 관리자
    language: Language.korea,
}

const user2 = {
    name: "유저김영현",
    role: Role.USER,
    language: Language.english,
}

const user3 = {
    name: "게스트김영현",
    role: Role.GUEST,
}

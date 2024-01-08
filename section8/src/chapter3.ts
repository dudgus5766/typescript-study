/**
 * 맵드 타입
 */

interface User {
    id: number;
    name: string;
    age: number;
}

type PartialUser = {
    [key in 'id' | 'name' | 'age']?: User[key]; // ? 를 넣으면 선택적 프로퍼티로 바뀜
}

type BooleanUser = {
    [key in keyof User]?: boolean;
}

type ReadonlyUser = {
    readonly [key in keyof User]?: User[key];
}

// 한 명의 유저 정보를 불러오는 기능
function fetchUser(): ReadonlyUser {
    return {
        id: 0,
        name: "김영현",
        age: 30,
    }
}

// 한 명의 유저 정보를 수정하는 기능
function updateUser(user: PartialUser) {

}

updateUser({
    // id: 1,
    // name: "김영현",
    age: 30,
})

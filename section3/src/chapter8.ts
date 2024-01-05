/**
 * 서로소 유니온 타입
 * -> 교집합이 없는 타입들로만 만든 유니온 타입
 */

type Admin = {
    tag: "ADMIN",
    name: string;
    kickCount: number;
};

type Member = {
    tag: "MEMBER",
    name: string;
    point: number;
};

type Guest = {
    tag: "GUEST",
    name: string;
    visitCount: number;
};

type User = Admin | Member | Guest;

// Admin -> {name}님 현재까지 {kickCount}명 강퇴하셨습니다.
// Member -> {name}님 현재까지 {point}모았습니다.
// Guest -> {name}님 현재까지 {visitCount}번 오셨습니다.
// function login(user: User){
//     if('kickCount' in user){
//         //Admin
//         console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴하셨습니다.`)
//
//     }else if('point' in user){
//         //Member
//         console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`)
//
//     }else{
//         //Guest
//         console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`)
//
//     }
// }

function login(user: User){

    switch (user.tag){
        case "ADMIN":{
            //Admin
            console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴하셨습니다.`)
        }
            break;
        case "MEMBER":{
            //Member
            console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`)
        }
            break;
        case "GUEST": {
            //Guest
            console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`)
        }
            break;
    }
}


// 비동기 작업 결과 처리 객체

// type AsyncTask = {
//     state: "LOADING" | "FAILED" | "SUCCESS",
//     error?: {
//         message: string;
//     },
//     response?: {
//         data: string;
//     },
// }


const loading: AsyncTask = {
    state: "LOADING",
}

const failed: AsyncTask  = {
    state: "FAILED",
    error: {
        message: "오류가 발생했습니다."
    },
}

const success: AsyncTask  = {
    state: "SUCCESS",
    response: {
        data: "데이터"
    },
}

type LoadingTask = {
    state: "LOADING"
}

type FailedTask = {
    state: "FAILED",
    error: {
        message: string;
    },
}

type SuccessTask = {
    state: "SUCCESS",
    response: {
        data: string;
    },
}

type AsyncTask = LoadingTask | FailedTask | SuccessTask


function processResult(task: AsyncTask){
    switch (task.state){
        case "LOADING":{
            console.log('로딩 중...');
            break;
        }
        case "FAILED":{
            console.log(`에러 발생 ${task.error.message}`);
            break;
        }
        case "SUCCESS":{
            console.log(`성공: ${task.response.data}`);
            break;
        }
    }
}

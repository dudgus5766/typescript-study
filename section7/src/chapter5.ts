/**
 * 프로미스와 제네릭
 */

// promise의 생성자를 호출할 때는 타입 변수를 new Promise 뒤에 할당해주면 비동기 처리 결과값에 대한 타입을 추론할 수 있게 함(명시 가능)
const promise = new Promise<number>((resolve, reject) => {
    setTimeout(() => {
        resolve(20); // 자동으로 인수의 타입을 추론하지 못함
        reject('실패입니다.');

    }, 3000);

});

promise.then((response) => {
    console.log(response * 10); // 20
})

promise.catch((err) => {
    // err는 any로 추론되기 때문에 타입을 좁혀야 함
    if(typeof err === 'string'){
        console.log(err);
    }
})


/**
 * 프로미스를 반환하는 함수의 타입을 정의
 */

interface Post {
    id: number;
    title: string;
    content: string;
}

function fetchPost(): Promise<Post>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: 1,
                title: '안녕하세요',
                content: '반갑습니다!',
            })
        }, 3000);
    })
}

const postRequest = fetchPost();
postRequest.then((post) => {
    console.log(post.id);
})

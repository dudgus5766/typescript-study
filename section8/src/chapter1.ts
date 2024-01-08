/**
 * 인덱스드 엑세스 타입
 * 인덱스를 이용하여 다른 타입 내에 특정 프로퍼티 타입을 추출하는 타입
 */

interface Post {
    title: string;
    content: string;
    author: {
        id: number;
        name: string;
        age?: number;
    }
}

type PostList = {
    title: string;
    content: string;
    author: {
        id: number;
        name: string;
        age?: number;
    }
}[];


const post: Post = {
    title: "게시글 제목",
    content: "게시글 본문",
    author: {
        id: 0,
        name: "김영현",
        age: 30,
    }
}


const post2: PostList[number] = {
    title: "게시글 제목",
    content: "게시글 본문",
    author: {
        id: 0,
        name: "김영현",
        age: 30,
    }
};

// Post 타입으로 부터 author 프로퍼티의 벨류타입인 객체타입만 추출해줌
// **인덱스 부분에는 타입이 들어가야함, 문자열이 아님!
function printAuthorInfo(author: Post["author"]) {
    console.log(`${author.id} - ${author.name}`);
}

function printAuthorInfo2(author: PostList[number]["author"]) {
    console.log(`${author.id} - ${author.name}`);
}

printAuthorInfo(post.author);
printAuthorInfo2(post2.author);

type Tup = [number, string, boolean];

type Tup0 = Tup[0];

type Tup1 = Tup[1];

type Tup2 = Tup[2];

type TupNum = Tup[number];




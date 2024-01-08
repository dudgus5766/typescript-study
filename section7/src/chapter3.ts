/**
 * 제네릭 인터페이스
 */

interface KeyPair<K, V> {
    key: K;
    value: V;
}


// 제네릭 인터페이스를 사용할 때는 반드시 타입 변수에 할당할 타입을 <>와 함께 넣어줘야
let keyPair: KeyPair<number, string> = {
    key: 1,
    value: "hello",
};

let keyPair2: KeyPair<boolean, string[]> = {
    key: true,
    value: ['hello', 'ji'],
}


/**
 * 인덱스 시그니처
 */

interface NumberMap<V> {
    [key: string]: V;
}

let numberMap: NumberMap<number> = {
    Korea: 1,
}
let booleanMap: NumberMap<boolean> = {
    Korea: true,
}


/**
 * 제네릭 타입 별칭
 */

type Map<V> = {
    [key: string]: V
}

let numberMap2: NumberMap<number> = {
    Korea: 1,
}

let booleanMap2: NumberMap<boolean> = {
    Korea: true,
}


/**
 * 제네릭 인터페이스 활용 예시
 * -> 유저 관리 프로그램
 * -> 유저 구분: 학생 / 개발자
 */

interface Student {
    type: "student";
    school: string;
}

interface Developer {
    type: "developer";
    skill: string;
}

type AllUser = Student | Developer ; // 서로소 유니온으로 타입을 좁힐 수 있음

interface User<T> {
    name: string;
    profile: T;
}

const developerUser: User<Developer> = {
    name: "김영현",
    profile: {
        type: "developer",
        skill: "React-Native",
    }
}

const studentUser: User<Student> = {
    name: "김돌돌",
    profile: {
        type: "student",
        school: "건국대학교",
    }
}

function goToSchool(user: User<Student>){
    // if(user.profile.type !== 'student'){
    //     console.log('잘못오셨습니다.');
    //     return;
    // }

    const school = user.profile.school;
    console.log(`${school}로 등교 완료!`);
    return;
}

// goToSchool(developerUser); // error!
goToSchool(studentUser);






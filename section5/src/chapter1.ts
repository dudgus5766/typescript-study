/**
 * 인터페이스 확장(상속)
 */
 type Animal = {
    name: string;
    age: number;
}

// 기존의 프로퍼티를 가진 상태로 확장
interface Dog extends Animal{
    // name: string;
    // age: number;
    name: string;
    isBark: boolean;
}

const dog: Dog = {
    name: "돌돌이",
    age: 1,
    isBark: true,
}

interface Cat extends Animal{
    // name: string;
    // age: number;
    isScratch: boolean;
}

interface Chicken extends Animal{
    // name: string;
    // age: number;
    isFly: boolean;
}

interface DogCat extends Dog, Cat{}

const dogCat: DogCat = {
    name: "돌돌이",
    age: 1,
    isBark: true,
    isScratch: false,
}

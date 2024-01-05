/**
 * 인터페이스와 클래스
 */

interface CharacterInterface {
    name: string;
    moveSpeed: number;
    move(): void;
}


// Character 클래스는 CharacterInterface 구현함
class Character implements CharacterInterface{
    public name: string;
    public moveSpeed: number;
    // private moveSpeed: number; // 인터페이스는 무조건 퍼블릭 필드만 정의할 수 있음

    constructor(name: string, moveSpeed: number) {
        this.name = name;
        this.moveSpeed = moveSpeed;
    }

    move():void {
        console.log(`${this.moveSpeed}로 달리는 중`)
    }
}

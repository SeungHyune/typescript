/**
 * 인터페이스와 클래스
 */

interface CharacterInterface {
    name: string;
    moveSpeed: number;
    move(): void;
}

class Character implements CharacterInterface {
    // name: string;
    // moveSpeed: number;

    constructor(
        public name: string, 
        public moveSpeed: number) {}

    move() {
        console.log(`${this.moveSpeed} 속도로 이동`);
    }
}

const character = new Character('조승현', 90);

console.log(character);
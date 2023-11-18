/**
 * 기본 타입간의 호환성
 */

let num1: number = 10;
let num2: 10 = 10;

num1 = num2; // 업 캐스팅
// num2 = num1; // 다운 캐스팅 (실패)

/**
 * 객체 타입간의 호환성
 * -> 어떤 객체 타입을 다른 객체타입으로 취급해도 괜찮은가?
 */

type Animal = {
    name: string;
    color: string;
};

type Dog = {
    name: string;
    color: string;
    breed: string;
};

let animal: Animal = {
    name: '기린',
    color: 'yellow',
}

let dog: Dog = {
    name: '돌돌이',
    color: 'brown',
    breed: '진도'
}

animal = dog; // 업 캐스팅

// dog = animal; // 다운 캐스팅

type Book = {
    name: string;
    price: number;
};

type ProgrammingBook = {
    name: string;
    price: number;
    skill: string;
};

let book = {
    name: 'HTTP 완벽가이드',
    price: 44000
}

let programmingBook = {
    name: '모던 자바스크립트 Deep Dive',
    price: 49000,
    skill: 'JavaScript'
}

book = programmingBook; // 업 캐스팅
// programmingBook = book; // 다운 캐스팅

/**
 * 초과 프로퍼티 검사
 */

let book2: Book = {
    name: '모던 자바스크립트 Deep Dive',
    price: 49000,
    // skill: 'JavaScript'
}

let book3: Book = programmingBook;

function func(book: Book) {}
func({
    name: '모던 자바스크립트 Deep Dive',
    price: 49000,
    // skill: 'JavaScript'
});
func(programmingBook);
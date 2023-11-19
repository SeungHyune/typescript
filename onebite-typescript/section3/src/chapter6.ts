/**
 * 타입 단언
 */

type Person = {
    name: string;
    age: number;
}

let person = {} as Person; // 타입 단언
person.name = '조승현';
person.age = 28;

type Dog = {
    name: string;
    color: string;
}

let dog: Dog = {
    name: '흰둥이',
    color: 'white',
    breed: '포메'
} as Dog;

/**
 * 타입 단언의 규칙
 * 값 as 단언
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 */

let num1 = 10 as never;   // A가 B의 슈퍼타입
let num2 = 10 as unknown; // A가 B의 서브타입

// let num3 = 10 as string; // A,B는 서로 교집합이 없는 타입
let num4 = 10 as unknown as string; // 다중단언을 사용하면.. 치트키 적으로 가능하긴함 (하지만 이럴거면 타입스크립트를 사용하는 이유가 없음)

/**
 * const 단언
 */

let num5 = 10 as const; // 리터럴 값으로 변경 (const로 선언한 것과 같은 효과)

let cat = {
    name: '고양이',
    color: 'yellow',
} as const; // 모든 프로퍼티가 readonly로 변경된다.

// cat.name = '';

/**
 * Non Null 단언 (!)
 * null && undefined가 아니라고 단언함
 */

type Post = {
    title: string;
    author?: string;
}

let post: Post = {
    title: '게시글1',
    author: '조승현'
}

const len: number = post.author!.length; // Non Null 단언의 경우 null & undefined 값은 아니라고 단언해주는 효과
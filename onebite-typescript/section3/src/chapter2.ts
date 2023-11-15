/**
 * Unknown 타입(타입들의 전체 집합 - 슈퍼 타입)
 */

function unknownExam() {
    // 업 캐스팅
    let a: unknown = 1;
    let b: unknown = "hello";
    let c: unknown = true;
    let d: unknown = null;
    let e: unknown = undefined;

    let unknownVar : unknown;

    // 다운 캐스팅
    // let num: number = unknownVar;
    // let str: string = unknownVar;
    // let bool: boolean = unknownVar;
}

/**
 * Never 타입 (모든 타입의 서브 타입 - 공집합)
 * 어떤 값도 저장되면 안될 때 활용하면 좋은 타입
 */

function neverExam() {
    function neverFunc(): never {
        while (true) {}
    }

    // 업 캐스팅 (never 타입은 모든 타입의 서브 타입이기 때문에 가능)
    let num: number = neverFunc();
    let str: string = neverFunc();
    let bool: boolean = neverFunc();
    let nullVar: null = neverFunc();
    let undefinedVar: undefined = neverFunc();

    // 다운 캐스팅
    // let never1: never = 10;
    // let never2: never = "string";
    // let never3: never = true;
}

/**
 * Void 타입 - void 타입은 undefined 타입의 슈퍼 타입이다.
 */

function voidExam() {
    function voidFunc(): void {
        console.log("hi");
    }

    let voidVar: void = undefined;
}

/**
 * any 타입 (치트키 타입)
 * any 타입은 자기한테 오는 다운 캐스팅과 자기가 다운 캐스팅 되는 것을 허용한다. (never 타입만 제외!!)
 */

// any 타입은 never 타입을 제외한 모든 타입에 다운캐스팅, 업캐스팅이 가능하다.
function anyExam() {
    let unknownVar: unknown;
    let anyVar: any;
    let undefinedVar: undefined;
    let neverVar: never;

    anyVar = unknownVar;
    
    undefinedVar = anyVar;

    // anyVar = neverVar;
    // neverVar = anyVar;
}
// void
// void -> 공허 -> 아무것도 없다.
// void -> 아무것도 없음을 의미하는 타입

function func1(): string {
    return "hello";
}

function funcNum(): number {
    return 1;
}

function func2(): void {
    console.log("hello");
}


// never
// never -> 존재하지 않는 불가능한 타입
function func3(): never {
    while (true) {}
}

function func4(): never {
    throw new Error();
}

let anyVar: any;

let a: never; // 어떤 값도 담을 수 없다.
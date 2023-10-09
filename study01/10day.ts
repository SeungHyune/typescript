// tuple type
let 멍멍:[string, boolean] = ['dog', true]

function day10(...x:[number, string]){
    console.log(x)
}
day10(1,'2');

let arr = [1,2,3];
let arr2:[number, number, ...number[]] = [4,5, ...arr]
console.log(arr2)

let food:[string, number, boolean] = ['임대장', 39000, true];
let arr3:[string, number, ...boolean[]] = ['동서녹차', 4000, true, false, true, true, false, true]

function Fn10(...x:[string, boolean, ...(string | number)[]]){
    console.log(x)
}

Fn10('문자', true, '책상', 30, 'JAVA','123',123)

function classifier(...x:[...(string | number)[]]):[string[], number[]]{
    console.log(x)
    let string:string[] = [];
    let number:number[] = [];
    x.forEach((a)=>{
        if(typeof a === 'string'){
            string.push(a);
        } else {
            number.push(a);
        }
    })

    console.log([string, number])
    return [string, number]
}

classifier('b', 5, 6, 8, 'a')
/**
 * 제네릭 클래스
 */

class List<T> {
    constructor(private list: T[]) {}

    push(data: T) {
        this.list.push(data)
    }

    pop() {
        this.list.pop();
    }

    print() {
        console.log(this.list);
    }
}

const numberList = new List([1, 2, 3, 4]);
const stringList = new List(['a', 'b', 'c', 'd']);

numberList.push(5);
numberList.pop();
numberList.pop();
numberList.pop();
numberList.pop();
numberList.pop();
numberList.print();
stringList.print();
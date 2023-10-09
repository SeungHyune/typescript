class Person {
    name;
    constructor(a) {
        this.name = a;
    }
}
let 사람1 = new Person('kim');
let 사람2 = new Person('park');
console.log(사람1, 사람2);
class Car {
    model;
    price;
    constructor(carType, carPrice) {
        this.model = carType;
        this.price = carPrice;
    }
    tax() {
        return this.price / 10;
    }
}
let car1 = new Car('소나타', 3000);
console.log(car1);
console.log(car1.tax());
class World {
    num;
    str;
    test;
    constructor(...a) {
        this.num = [];
        this.str = [];
        this.test = a.forEach((data) => {
            if (typeof data === 'number') {
                this.num.push(data);
            }
            else {
                this.str.push(data);
            }
        });
    }
}
let 오브젝트 = new World('kim', 3, 5, 'park');
console.log(오브젝트.num);
console.log(오브젝트.str);
let 네모 = { color: 'red', width: 100 };
let student = { name: 'kim' };
let teacher = { name: 'kim', age: 20 };
let 상품 = { brand: 'Samsung', serialNumber: 1360, model: ['TV', 'phone'] };
let 장바구니 = [{ product: '청소기', price: 7000 }, { product: '삼다수', price: 800 }];
let 카드추가 = [{ product: '청소기', price: 7000, card: false }];
let ObjData = {
    plus: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    }
};
console.log(ObjData.plus(1, 2));
console.log(ObjData.minus(1, 2));
function fn6(...a) {
    console.log(a);
}
fn6(1, 5, 3, 5, 6, 6);
function obj3({ student, age }) {
    console.log(student, age);
}
obj3({ student: true, age: 20 });
function 최댓값(...a) {
    let result = 0;
    a.forEach((i) => {
        if (result < i) {
            result = i;
        }
    });
    return result;
}
console.log(최댓값(6, 3, 7, 2));
function 오뚜기({ user, comment, admin }) {
    console.log(user, comment, admin);
}
오뚜기({ user: 'kim', comment: [3, 5, 4], admin: false });
function 어레이([a, b, c]) {
    console.log(a, b, c);
}
어레이([40, 'wine', false]);

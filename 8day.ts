// public - 기본값 같은 느낌

class Public {
    public name : string;
    constructor(a){
        this.name = a
    }
    public publicFn(){
        this.name = '이름 바꾸는 함수';
    }
}

let 자식1 = new Public('park');
자식1.name = 'Jin';
//자식1.publicFn();
console.log(자식1)

// private

class Private {
    name : string;
    private familyName : string = 'kim';
    constructor(a){
        this.name = a + this.familyName
    }
    changeFamilyName(){
        this.familyName = 'park'
    }
}

const 자식2 = new Private('민수');
자식2.changeFamilyName();
console.log(자식2);


class Person2 {
    //name:string;
    color:string;
    size :string;
    constructor(public name:string, b, c, public num:number){
        this.color = b;
        this.size = c
    }
}

let 사람 = new Person2('park', 'pink', 'large', 4)
console.log(사람);

// protected

class Protected {
    protected x:number;
    constructor(){
        this.x = 10;
    }
}

class NewUser extends Protected {
     //x = 20;
     y:number;
     constructor(){
        super()
        this.y = 20
     }
     changeNewUser(){
        this.x = 20;
     }
}
let 유저2 = new Protected();
let 유저3 = new NewUser()
console.log(유저2)
console.log(유저3, 유저3.changeNewUser())

// static - 부모만 사용가능 / ex) Static.x

class Static {
    static x = 10;
    y = 20;
}

let 스테틱 = new Static();
console.log(스테틱);

class User2 {
    static skill = 'js';
    intro = User2.skill + '전문가입니다.';
    // changeSkill(){
    //     this.skill = 'ts';
    //     this.intro = this.skill + '전문가입니다.';
    // }
}

let 철수  = new User2();
console.log(철수)


let 철수2 = new User2();
//철수2.changeSkill();
console.log(철수2)


class User3 {
  // 변경하려면 User3 안에서만 가능 (private 속성에 의하여), 또 static 속성에 의하여 class명인 User3.값 으로 변경할 수 있어서 methods 함수로 변경 가능하고 호출 가능함
  private static x = 10;
  public static y = 20;
  protected z = 30;

  changeX(){
    User3.x = 20;
    console.log(User3.x)
  }

  changeY(){
    User3.y = 2023;
    console.log(User3.y)
  }
}

class User4 extends User3 {
    changeZ(){
        this.z = 300;    
    }
}

let 유저33 = new User3();
let 유저4 = new User4();

// private static
유저33.changeX()
console.log(유저33)

// public static
User3.y = 2024;
console.log(User3.y, 유저33.changeY())

// protected
유저4.changeZ()
console.log(유저4)

class Add {
    private static x = 10;
    public static y = 20;
    // addOne:(a:number) => number = (a) => {
    //     return Add.x = Add.x + a;
    //     console.log(Add.x)
    // };
    static addOne(a:number){
        Add.x += a
    }
    static PrintX(){
        console.log(Add.x)
    }
}

Add.addOne(3)
Add.PrintX()

class Square100 {
    width:number;
    height:number;
    color:string;
    constructor(width:number, height:number, color:string){
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw(){
        let a = Math.random();
        let randomBox = `<div style="position:relative;
        top:${a * 400}px;
        left:${a * 400}px;
        width:${this.width}px;
        height:${this.height}px;
        background-color:${this.color}"></div>`;
        document.body.insertAdjacentHTML('beforeend', randomBox);
    }
}

let 네모100 = new Square100(30, 30, 'pink');
네모100.draw();
네모100.draw();
네모100.draw();
네모100.draw();
네모100.draw();
네모100.draw();
네모100.draw();
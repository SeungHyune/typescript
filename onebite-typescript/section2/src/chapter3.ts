// Object
// 객체 리터럴 타입

// 구조적 타입 시스템
const user: {
    id?: number;
    name: string
} = {
    id: 1,
    name: '조승현'
};

user.id;
user.name;

// let dog: {
//     name: string;
//     color: string;
// } = {
//     name: '구름이',
//     color: 'white',
// };

// dog.color;

const config: {
    // readonly 속성을 부여하면 읽기 전용 속성으로 바뀌어 수정이 불가하다.
    readonly apiKey: string;
} = {
    apiKey: 'MY API KEY',
};

// config.apiKey = 'string';
// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
    // 숫자형 이넘의 경우 자동으로 0부터 할당된다. (임의로 원하는 값을 할당하거나 생략 가능하다.)
    ADMIN,
    USER,
    GUEST
}

enum Language {
    korean = 'ko',
    english = 'en'
}

enum Country {
    Korea = '한국',
    Usa = '미국',
    Japen = '일본',
    China = '중국'
}

const user1 = {
    name: '조승현',
    role: Role.ADMIN, // 0 <- 관리자
    language: Language.korean,
    country: Country.Korea
};

const user2 = {
    name: '홍길동',
    role: Role.USER, // 1 <- 일반 유저
    country: Country.Usa
}

const user3 = {
    name: '아무개',
    role: Role.GUEST, // 2 <- 게스트
    country: Country.Japen
}

console.log(user1, user2, user3)


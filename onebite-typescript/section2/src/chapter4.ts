// 타입 별칭

type User = {
    id: number;
    name: string;
    nickname: string;
    birth: string;
    bio: string;
    location: string
}

const user: User = {
    id: 1,
    name: '조승현',
    nickname: 'rekoding',
    birth: '1994.12.26',
    bio: '안녕하세요',
    location: 'Osansi'
}

const user2: User = {
    id: 2,
    name: '홍길동',
    nickname: 'josun',
    birth: '1540.01.28',
    bio: '안녕하세요.',
    location: 'Hanyang'
}

// 인덱스 시그니처
type CountryCodes = {
    [key: string]: string;
}

const countryCodes: CountryCodes = {
    Korea: 'ko',
    UnitedState: 'us',
    UnitedKingdom: 'uk'
}

type CountryNumberCodes = {
    [key: string]: number;
    Korea: number;
}

let countryNumberCodes: CountryNumberCodes = {
    Korea: 410,
}
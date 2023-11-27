/**
 * 맵드 타입
 */

interface User {
    id: number;
    name: string;
    age: number;
}

// mapped 타입의 경우 interface에서는 만들 수 없습니다.
type PartialUser = {
    [key in keyof User]?: User[key];
};

type BooleanUser = {
    [key in keyof User]: Boolean;
}

type ReadonlyUser = {
    readonly [key in keyof User]: User[key];
}

// 한명의 유저 정보를 불러오는 기능
function fetchUser(): ReadonlyUser {
    // ... 기능
    return {
        id: 1,
        name: '조승현',
        age: 28,
    }
}

// 한명의 유저 정보를 수정하는 기능
function updateUser(user: User) {
    // ... 수정하는 기능
}

updateUser({
    id: 1,
    name: '조승현',
    age: 25
});

const user = fetchUser();
// user.id = 1; // readonly 속성으로 변경이 불가능합니다.
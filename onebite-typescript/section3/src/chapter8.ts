/**
 * 서로소 유니온 타입
 * 교집합이 없는 타입들로만 만든 유니온 타입을 말한다.
 */

type Admin = {
    tag: 'ADMIN',
    name: string,
    kickCount: number
};

type Member = {
    tag: 'MEMBER',
    name: string,
    point: number
};

type Guest = {
    tag: 'GUEST',
    name: string,
    visitCount: number
};

type User = Admin | Member | Guest;

// Admin => {name}님 현재까지 {kickCount}명 강퇴했습니다.
// Member => {name}님 현재까지 {point}모았습니다.
// Guest => {name}님 현재까지 {visitCount}번 오셨습니다.
function login(user: User) {
    switch(user.tag) {
        case 'ADMIN': {
            console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
            break;
        }
        case 'MEMBER': {
            console.log(`${user.name}님 현재까지 ${user.point} 모았습니다.`);
            break;
        }
        case 'GUEST': {
            console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문하셨습니다.`);
            break;
        }
    }
}

// 비동기 작업의 결과를 처리하는 객체
function processResult(task: AsyncTask) {
    switch(task.state) {
        case 'LOADING': {
            console.log('로딩 중');
            break;
        }
        case 'FAILED': {
            console.log(`에러 발생 : ${task.error.message}`)
            break;
        }
        case 'SUCCESS': {
            console.log(`처리 완료 : ${task.response.data}`)
            break;
        }
    }
}

type Loading = {
    state: 'LOADING',
}

type Failed = {
    state: 'FAILED',
    error: {
        message: string
    }
}

type Success = {
    state: 'SUCCESS',
    response: {
        data: string
    }
}

type AsyncTask = Loading | Failed | Success

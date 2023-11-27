/**
 * 인덱스드 엑세스 타입
 * - 타입만 들어올 수 있다.
 */

interface Post {
    title: string;
    content: string;
    author: {
        id: number;
        name: string;
        age: number;
    };
}

function printAuthorInfo(author: Post['author']) {
    console.log(`${author.name}-${author.id}`);
}

const post: Post = {
    title: '게시글 제목',
    content: '게시글 본문',
    author: {
        id: 1,
        name: '조승현',
        age: 28
    }
}

printAuthorInfo(post.author);

type PostList = {
    title: string;
    content: string;
    author: {
        id: number;
        name: string;
        age: number;
    };
}[];

function printAuthorInfo2(author: PostList[number]['author']) {
    console.log(`${author.name}-${author.id}-${author.age}`);
}

const postList: PostList[number] = {
    title: '게시글 제목',
    content: '게시글 본문',
    author: {
        id: 1,
        name: '조승현',
        age: 28
    }
}

printAuthorInfo2(postList.author);

type Tup = [number, string, boolean];
type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];
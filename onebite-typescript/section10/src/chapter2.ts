/**
 * Pick<T, K>
 * -> 객체 타입으로부터 특정 프로퍼티만 딱 골라내는 타입
 */

interface Post {
    title: string;
    tags: string[];
    content: string;
    thumbnailURL?: string;
}

type Pick<T, K extends keyof T> = {
    // K extends 'title' | 'tags' | 'content' | 'thumbnailURL'
    // number extends 'title' | 'tags' | 'content' | 'thumbnailURL'
    [key in K]: T[key];
};

const legacyPost: Pick<Post, "title" | "content"> = {
    title: '오래된 게시글',
    content: '오래된 컨텐츠'
};

/**
 * Omit<T, K>
 * -> 객체 타입으로부터 특정 프로퍼티를 제거하는 타입
 */

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// T = Post, K = 'title'
// Pick<Post, Exclude<'title' | 'content' | 'tags' | 'thumbnailURL', 'title'>>
// Pick<Post, 'content' | 'tags' | 'thumbnailURL'

const noTitlePost: Omit<Post, 'title'> = {
    content: '',
    tags: [],
    thumbnailURL: '',
};

/**
 * Record<T, V>
 * 
 */

type Record<K extends keyof any, V> = {
    [key in K]: V
}

type Thumbnail = Record<"large" | "medium" | "small" | "watch", { url: string, size: number }>


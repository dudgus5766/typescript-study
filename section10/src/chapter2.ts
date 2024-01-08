/**
 * Pick<T, K>
 * -> 뽑다, 고르다
 * -> 객체 타입으로부터 특정 프로퍼티만 뽑아낸 타입
 */


interface Post {
    title: string;
    tags: string[];
    content: string;
    thumbnailURL? : string;
}

type Pick<T, K extends keyof T> = {
    [key in K ]: T[key];
}

const legacyPost: Pick<Post, 'title' | 'content'> = {
    title: "옛 글",
    content: "옛 컨텐츠"
}


/**
 * Omit<T, K>
 * -> 객체 타입으로부터 특정 프로퍼티를 제거하는 타입
 */

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// T = Post, K = 'title'
// Pick<Post, Exclude<keyof Post, 'title'>>
// Pick<Post, Exclude<'title' | 'tags' | 'content' | 'thumbnailURL', 'title'>>
// -> Exclude는 두 개의 타입변수를 받음
// -> 앞에 전달한 타입변수에서 뒤에 전달한 타입변수를 제거한 타입을 반환함
// -> Pick<Post, 'tags' | 'content' | 'thumbnailURL'>

const noTitlePost: Omit<Post, 'title'> = {
    content: "",
    tags: [],
    thumbnailURL: "",
}


/**
 * Record<K ,V>
 */

type ThumbnailLegacy = {
    large: {
        url: string;
    };
    medium: {
        url: string;
    };
    small: {
        url: string;
    };
}

type Record<K extends keyof any, V> = {
    [key in K] : V;
}

// 객체 타입을 만들어주는 유틸리티 타입
// -> key를 받고, 뒤에서는 벨류값을 받음
type Thumbnail = Record<'large' | 'medium' | 'small', {url: string, size: number}>;




export interface BigPost {
    title: string;
    smallerTitle: string;
    category: string;
    image: string;
}

export interface Post {
    title: string;
    smallerTitle: string;
    category: string;
    image: string;
    dateAdded: string;
    timeAdded: string;
    views: number;
    source: string;
    text?: string;
}

export interface CategoryPost {
    title: string;
    image: string;
}
import { CategoryPost } from "./BigPost";

export interface Category {
    title: string;
    mainPost: CategoryPost;
    posts: CategoryPost[];
}
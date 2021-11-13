import { CategoryPost } from "./BigPost";
import { Post } from "./Post";

export interface Category {
    _id: string;
    name: string;
    position: number;
    posts: number;
    views: number;
    time_added: string;
    date_added: string;
  }

export interface CategoryPayload {
    category: Category;
    posts: Post[];
    primeryPost: Post
}
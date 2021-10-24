export interface Post {
    _id: string;
    title: string;
    small_title: string;
    category: string;
    category_id: string;
    subCat: string;
    sub_cat_id: string;
    text: string;
    image: string;
    source: string;
    date_posted: string;
    time_posted: string;
    primary_post: boolean;
    views: number;
    writer: string;
}
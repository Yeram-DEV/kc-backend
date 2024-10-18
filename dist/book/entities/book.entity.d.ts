import { BookCategory } from './book-category.entity';
export declare class Book {
    book_id: string;
    book_isbn13: string;
    book_category_id: string;
    book_name: string;
    book_author: string;
    book_publisher: string;
    book_pub_date: Date;
    book_cover_img_url: string;
    book_desc: string;
    book_toc: string;
    updated_at: Date;
    created_at: Date;
    book_category: BookCategory;
}

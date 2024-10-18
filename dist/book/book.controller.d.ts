import { QueryBooksDto } from '@book/dto';
import { Book } from '@book/entities';
import { BookService } from '@book/book.service';
export declare class BookController {
    private readonly bookService;
    constructor(bookService: BookService);
    findBookAll(query: QueryBooksDto): Promise<Book[]>;
    findBookOne(book_id: string): Promise<Book>;
}

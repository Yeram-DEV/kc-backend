import { Repository } from 'typeorm';
import { QueryBooksDto } from '@book/dto';
import { Book } from '@book/entities';
export declare class BookService {
    private readonly bookRepository;
    private readonly logger;
    constructor(bookRepository: Repository<Book>);
    findAll({ page, limit, book_name, book_author, book_publisher, ...filters }: QueryBooksDto): Promise<Book[] | null>;
    findOne(book_id: string): Promise<Book>;
}

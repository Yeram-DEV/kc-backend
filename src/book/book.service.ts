import { Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Book } from './entities/book.entity'
import { Like, Repository } from 'typeorm'
import { FindBooksDto } from './dto/find-books.dto'

@Injectable()
export class BookService {
  private readonly logger = new Logger(BookService.name)

  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>
  ) {}

  async findAll({ page, limit, book_name, book_author, book_publisher, ...filters }: FindBooksDto): Promise<Book[]> {
    try {
      return this.bookRepository.find({
        where: {
          ...filters,
          ...(book_name && { book_name: Like(`%${book_name}%`) }),
          ...(book_author && { book_author: Like(`%${book_author}%`) }),
          ...(book_publisher && { book_publisher: Like(`%${book_publisher}%`) })
        },
        relations: ['book_category'],
        skip: (page - 1) * limit,
        take: limit,
        order: { created_at: 'desc' }
      })
    } catch (error) {
      this.logger.error(error)
      throw new InternalServerErrorException('서버에서 책을 가져오는 중 오류가 발생했습니다.')
    }
  }

  async findOne(book_id: string): Promise<Book> {
    try {
      const book = await this.bookRepository.findOne({
        where: { book_id },
        relations: ['book_category']
      })

      if (!book) {
        throw new NotFoundException(`ID ${book_id}에 해당하는 책을 찾을 수 없습니다.`)
      }

      return book
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error
      }
      this.logger.error(error)
      throw new InternalServerErrorException('서버에서 책을 가져오는 중 오류가 발생했습니다.')
    }
  }
}

import { Controller, Get, Param, Query, Version } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiSecurity, ApiTags } from '@nestjs/swagger'
import { QueryBooksDto } from '@book/dto'
import { Book } from '@book/entities'
import { BookService } from '@book/book.service'

@ApiTags('책')
@ApiSecurity('x-api-key')
@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @ApiOperation({ summary: '다건 책 조회' })
  @ApiResponse({
    status: 200,
    description: '성공적으로 책 목록을 조회했습니다.',
    type: Book,
    isArray: true
  })
  @Version('1')
  @Get()
  async findBookAll(@Query() query: QueryBooksDto) {
    return await this.bookService.findAll(query)
  }

  @ApiOperation({ summary: '단건 책 조회' })
  @ApiResponse({
    status: 200,
    description: '성공적으로 책을 조회했습니다.',
    type: Book
  })
  @Version('1')
  @Get(':book_id')
  async findBookOne(@Param('book_id') book_id: string) {
    return await this.bookService.findOne(book_id)
  }
}

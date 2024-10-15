import { Controller, Get, Param, Query, Version } from '@nestjs/common'
import { BookService } from './book.service'
import { FindBooksDto } from './dto/find-books.dto'
import { ApiOperation, ApiResponse, ApiSecurity, ApiTags } from '@nestjs/swagger'
import { Book } from './entities/book.entity'

@ApiTags('book')
@ApiSecurity('x-api-key')
@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Version('1')
  @Get()
  @ApiOperation({ summary: '모든 책 조회' })
  @ApiResponse({
    status: 200,
    description: '성공적으로 책 목록을 조회했습니다.',
    type: Book,
    isArray: true
  })
  findAll(@Query() query: FindBooksDto) {
    return this.bookService.findAll(query)
  }

  @Version('1')
  @Get(':id')
  @ApiOperation({ summary: '단일 책 조회' })
  @ApiResponse({
    status: 200,
    description: '성공적으로 책을 조회했습니다.',
    type: Book
  })
  findOne(@Param('id') id: string) {
    return this.bookService.findOne(id)
  }
}

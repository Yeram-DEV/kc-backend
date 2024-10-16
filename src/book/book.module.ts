import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { BookController } from '@book/book.controller'
import { BookService } from '@book/book.service'
import { Book, BookCategory } from '@book/entities'

@Module({
  imports: [TypeOrmModule.forFeature([Book, BookCategory])],
  controllers: [BookController],
  providers: [BookService]
})
export class BookModule {}

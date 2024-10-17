import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { BookController } from '@book/book.controller'
import { Book, BookCategory } from '@book/entities'
import { BookService } from '@book/book.service'

@Module({
  imports: [TypeOrmModule.forFeature([Book, BookCategory])],
  controllers: [BookController],
  providers: [BookService]
})
export class BookModule {}

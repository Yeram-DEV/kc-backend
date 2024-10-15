import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn
} from 'typeorm'
import { BookCategory } from './book-category.entity'
import { ApiProperty } from '@nestjs/swagger'

@Entity('book')
export class Book {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  book_id: string

  @ApiProperty()
  @Column({ length: 13 })
  book_isbn13: string

  @ApiProperty()
  @Column({ length: 10 })
  book_category_id: string

  @ApiProperty()
  @Column({ length: 1000 })
  book_name: string

  @ApiProperty()
  @Column({ length: 500 })
  book_author: string

  @ApiProperty()
  @Column({ length: 500 })
  book_publisher: string

  @ApiProperty()
  @Column({ type: 'timestamp', nullable: true })
  book_pub_date: Date

  @ApiProperty()
  @Column({ length: 1000, nullable: true })
  book_cover_img_url: string

  @ApiProperty()
  @Column('text', { nullable: true })
  book_desc: string

  @ApiProperty()
  @Column('text', { nullable: true })
  book_toc: string

  @ApiProperty()
  @UpdateDateColumn()
  updated_at: Date

  @ApiProperty()
  @CreateDateColumn()
  created_at: Date

  @ApiProperty()
  @OneToOne(() => BookCategory)
  @JoinColumn({ name: 'book_category_id' }) // 외래 키 설정
  book_category: BookCategory
}

import { Entity, Column, PrimaryColumn } from 'typeorm'
import { ApiProperty } from '@nestjs/swagger'

@Entity('book_category')
export class BookCategory {
  @ApiProperty()
  @PrimaryColumn({ length: 10 })
  book_category_id: string

  @ApiProperty()
  @Column({ length: 200 })
  book_category_desc: string
}

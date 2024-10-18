import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { ApiProperty } from '@nestjs/swagger'

@Entity('review')
export class Review {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  review_id: string

  @ApiProperty()
  @Column('uuid')
  user_id: string

  @ApiProperty()
  @Column('uuid')
  book_id: string

  @ApiProperty()
  @Column('text')
  review_contents: string

  @ApiProperty()
  @UpdateDateColumn()
  updated_at: Date

  @ApiProperty()
  @CreateDateColumn()
  created_at: Date
}

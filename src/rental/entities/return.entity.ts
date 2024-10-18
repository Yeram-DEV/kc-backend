import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { ApiProperty } from '@nestjs/swagger'

@Entity('return')
export class Return {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  return_id: string

  @ApiProperty()
  @Column('uuid')
  user_id: string

  @ApiProperty()
  @Column('uuid')
  book_id: string

  @ApiProperty()
  @UpdateDateColumn()
  updated_at: Date

  @ApiProperty()
  @CreateDateColumn()
  created_at: Date
}

import { ApiProperty } from '@nestjs/swagger'
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity('rental')
export class Rental {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  rental_id: string

  @ApiProperty()
  @Column('uuid')
  user_id: string

  @ApiProperty()
  @Column('uuid')
  book_id: string

  @ApiProperty()
  @Column({ type: 'timestamp' })
  rental_date: Date

  @ApiProperty()
  @Column({ type: 'timestamp' })
  rental_due_date: Date

  @ApiProperty()
  @UpdateDateColumn()
  updated_at: Date

  @ApiProperty()
  @CreateDateColumn()
  created_at: Date
}

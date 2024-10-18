import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { ApiProperty } from '@nestjs/swagger'

@Entity('wait')
export class Wait {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  wait_id: string

  @ApiProperty()
  @Column('uuid')
  user_id: string

  @ApiProperty()
  @Column('uuid')
  book_id: string

  @ApiProperty()
  @Column()
  wait_order_num: number

  @ApiProperty()
  @UpdateDateColumn()
  updated_at: Date

  @ApiProperty()
  @CreateDateColumn()
  created_at: Date
}

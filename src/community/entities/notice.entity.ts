import { ApiProperty } from '@nestjs/swagger'
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity('notice')
export class Notice {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  notice_id: string

  @ApiProperty()
  @Column('text')
  notice_title: string

  @ApiProperty()
  @Column('text')
  notice_content: string

  @ApiProperty()
  @Column('uuid')
  user_id: string

  @ApiProperty()
  @Column({ default: false })
  notice_is_important: boolean

  @ApiProperty()
  @Column({ default: false })
  notice_is_active: boolean

  @ApiProperty()
  @UpdateDateColumn()
  updated_at: Date

  @ApiProperty()
  @CreateDateColumn()
  created_at: Date
}

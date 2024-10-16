import { ApiProperty } from '@nestjs/swagger'
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity('event')
export class Event {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  event_id: string

  @ApiProperty()
  @Column({ length: 500 })
  event_name: string

  @ApiProperty()
  @Column({ length: 500, nullable: true })
  event_thumb_url: string

  @ApiProperty()
  @Column({ length: 500, nullable: true })
  event_summary: string

  @ApiProperty()
  @Column({ type: 'date' })
  event_start_date: Date

  @ApiProperty()
  @Column({ type: 'date' })
  event_end_date: Date

  @ApiProperty()
  @Column({ default: false })
  event_is_active: boolean

  @ApiProperty()
  @Column({ type: 'text', nullable: true })
  event_content: string

  @ApiProperty()
  @UpdateDateColumn()
  updated_at: Date

  @ApiProperty()
  @CreateDateColumn()
  created_at: Date
}

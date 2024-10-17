import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsUUID } from 'class-validator'

export class CreateRentalDto {
  @ApiProperty({ description: '책 아이디' })
  @IsUUID()
  @IsNotEmpty()
  book_id: string

  @ApiProperty({ description: '유저 아이디' })
  @IsUUID()
  @IsNotEmpty()
  user_id: string
}

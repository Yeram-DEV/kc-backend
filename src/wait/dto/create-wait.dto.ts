import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsUUID } from 'class-validator'

export class CreateWaitDto {
  @ApiProperty()
  @IsUUID()
  @IsNotEmpty()
  user_id: string

  @ApiProperty()
  @IsUUID()
  @IsNotEmpty()
  book_id: string
}

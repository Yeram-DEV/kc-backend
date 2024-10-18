import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString, IsUUID } from 'class-validator'

export class CreateReviewDto {
  @ApiProperty({ description: 'user_id' })
  @IsUUID()
  @IsNotEmpty()
  book_id: string

  @ApiProperty({ description: '유저 아이디' })
  @IsUUID()
  @IsNotEmpty()
  user_id: string

  @ApiProperty({ description: '리뷰 내용' })
  @IsString()
  @IsNotEmpty()
  review_contents: string
}

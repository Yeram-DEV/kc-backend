import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { IsNotEmpty, IsOptional, IsUUID } from 'class-validator'

export class QueryRentalDto {
  @ApiProperty({ description: '책 아이디로 검색합니다.' })
  @IsUUID()
  @IsNotEmpty()
  book_id: string

  @ApiPropertyOptional({ description: '유저 아이디로 검색합니다.' })
  @IsOptional()
  @IsUUID()
  user_id?: string
}

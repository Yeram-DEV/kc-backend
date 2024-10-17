import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class QueryWaitDto {
  @ApiProperty({ description: '책 아이디로 검색합니다.' })
  @IsNotEmpty()
  @IsString()
  book_id: string

  @ApiPropertyOptional({ description: '유저 아이디로 검색합니다.' })
  @IsOptional()
  @IsString()
  user_id?: string
}

import { IsOptional, IsString, IsInt, Min } from 'class-validator'
import { Type } from 'class-transformer'
import { ApiPropertyOptional } from '@nestjs/swagger'

export class QueryBooksDto {
  @ApiPropertyOptional({ description: '저자명으로 검색합니다.' })
  @IsOptional()
  @IsString()
  book_author?: string

  @ApiPropertyOptional({ description: '출판사명으로 검색합니다.' })
  @IsOptional()
  @IsString()
  book_publisher?: string

  @ApiPropertyOptional({ description: '책 이름으로 검색합니다.' })
  @IsOptional()
  @IsString()
  book_name?: string

  @ApiPropertyOptional({ description: '카테고리 ID로 검색합니다.', example: 'em' })
  @IsOptional()
  @IsString()
  book_category_id?: string

  @ApiPropertyOptional({ description: '조회할 페이지 번호입니다.', example: 1, minimum: 1 })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page?: number = 1

  @ApiPropertyOptional({ description: '페이지당 항목 수입니다.', example: 10, minimum: 1 })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  limit?: number = 10
}

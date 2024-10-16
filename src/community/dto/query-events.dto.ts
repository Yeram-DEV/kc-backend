import { ApiPropertyOptional } from '@nestjs/swagger'
import { IsInt, IsOptional, IsString, Min } from 'class-validator'
import { Type } from 'class-transformer'

export class QueryEventsDto {
  @ApiPropertyOptional({ description: '이벤트 제목, 내용등을 검색합니다.' })
  @IsOptional()
  @IsString()
  search_text?: string

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

import { ApiPropertyOptional } from '@nestjs/swagger'
import { IsUUID, IsOptional, IsInt, Min, Validate } from 'class-validator'
import { Type } from 'class-transformer'
import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator'

@ValidatorConstraint({ async: false })
class AtLeastOneFieldValidator implements ValidatorConstraintInterface {
  validate(_: any, args: ValidationArguments) {
    const { book_id, user_id } = args.object as { book_id?: string; user_id?: string }
    return !!book_id || !!user_id
  }

  defaultMessage() {
    return '필수 입력 항목 중 하나가 누락되었습니다.'
  }
}

export class QueryReviewsDto {
  @ApiPropertyOptional({ description: '책 아이디로 검색합니다. 선택적이지만 user_id가 없으면 필수입니다.' })
  @IsOptional()
  @IsUUID()
  book_id?: string

  @ApiPropertyOptional({ description: '유저 아이디로 검색합니다. 선택적이지만 book_id가 없으면 필수입니다.' })
  @IsOptional()
  @IsUUID()
  user_id?: string

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

  @Validate(AtLeastOneFieldValidator)
  checkAtLeastOne: boolean
}

import { Controller, Get, Post, Body, Param, Delete, Version, Query } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiSecurity, ApiTags } from '@nestjs/swagger'
import { CreateRentalDto, QueryRentalDto } from '@rental/dto'
import { Rental } from '@rental/entities'
import { RentalService } from '@rental/rental.service'

@ApiSecurity('x-api-key')
@Controller('rental')
export class RentalController {
  constructor(private readonly rentalService: RentalService) {}

  @ApiTags('대여')
  @ApiOperation({ summary: '대여하기 대여정보를 생성합니다' })
  @ApiResponse({
    status: 200,
    description: '성공적으로 대여정보를 생성했습니다.',
    type: Rental
  })
  @Version('1')
  @Post()
  async createRental(@Body() createRentalDto: CreateRentalDto) {
    return await this.rentalService.create(createRentalDto)
  }

  @ApiTags('대여')
  @ApiOperation({ summary: '대여 정보 조회' })
  @ApiResponse({
    status: 200,
    description: '성공적으로 대여정보를 조회했습니다.',
    type: Rental
  })
  @Version('1')
  @Get()
  async findRentalOne(@Query() query: QueryRentalDto) {
    return await this.rentalService.findOne(query)
  }

  @ApiTags('반납')
  @ApiOperation({ summary: '반납 하기 대여정보를 삭제합니다' })
  @Version('1')
  @Delete(':rental_id')
  async removeRental(@Param('rental_id') rental_id: string) {
    return await this.rentalService.remove(rental_id)
  }
}

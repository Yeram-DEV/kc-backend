import { Controller, Get, Post, Body, Param, Delete, Version, Query } from '@nestjs/common'
import { WaitService } from '@wait/wait.service'
import { CreateWaitDto, QueryWaitDto } from '@wait/dto'
import { ApiOperation, ApiResponse, ApiSecurity, ApiTags } from '@nestjs/swagger'
import { Wait } from '@wait/entities'

@ApiTags('대기')
@ApiSecurity('x-api-key')
@Controller('wait')
export class WaitController {
  constructor(private readonly waitService: WaitService) {}

  @ApiOperation({ summary: '대기자를 생성합니다.' })
  @Version('1')
  @Post()
  async create(@Body() createWaitDto: CreateWaitDto) {
    return await this.waitService.create(createWaitDto)
  }

  @ApiOperation({ summary: '대기자를 조회합니다.' })
  @ApiResponse({
    status: 200,
    description: '성공적으로 대기자 리스트를 조회했습니다.',
    type: Wait,
    isArray: true
  })
  @Version('1')
  @Get()
  async findAll(@Query() query: QueryWaitDto) {
    return await this.waitService.findAll(query)
  }

  @ApiOperation({ summary: '대기자를 삭제(취소)합니다' })
  @Version('1')
  @Delete(':wait_id')
  async remove(@Param('wait_id') wait_id: string) {
    return await this.waitService.remove(wait_id)
  }
}

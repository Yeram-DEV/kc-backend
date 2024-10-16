import { Controller, Get, Param, Query, Version } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiSecurity, ApiTags } from '@nestjs/swagger'
import { CommunityService } from '@community/community.service'
import { QueryEventsDto, QueryNoticesDto } from '@community/dto'
import { Event, Notice } from '@community/entities'

@ApiTags('community')
@ApiSecurity('x-api-key')
@Controller('community')
export class CommunityController {
  constructor(private readonly communityService: CommunityService) {}

  @Version('1')
  @Get('event')
  @ApiOperation({ summary: '다건 이벤트 조회' })
  @ApiResponse({
    status: 200,
    description: '성공적으로 이벤트 목록을 조회했습니다.',
    type: Event,
    isArray: true
  })
  findEventAll(@Query() query: QueryEventsDto) {
    return this.communityService.findEventAll(query)
  }

  @Version('1')
  @Get('event/:id')
  @ApiOperation({ summary: '단건 이벤트 조회' })
  @ApiResponse({
    status: 200,
    description: '성공적으로 이벤트를 조회했습니다.',
    type: Event
  })
  findEventOne(@Param('id') id: string) {
    return this.communityService.findEventOne(id)
  }

  @Version('1')
  @Get('notice')
  @ApiOperation({ summary: '다건 공지사항 조회' })
  @ApiResponse({
    status: 200,
    description: '성공적으로 공지사항 목록을 조회했습니다.',
    type: Notice,
    isArray: true
  })
  findNoticeAll(@Query() query: QueryNoticesDto) {
    return this.communityService.findNoticeAll(query)
  }

  @Version('1')
  @Get('notice/:id')
  @ApiOperation({ summary: '단건 이벤트 조회' })
  @ApiResponse({
    status: 200,
    description: '성공적으로 공지사항을 조회했습니다.',
    type: Notice
  })
  findNoticeOne(@Param('id') id: string) {
    return this.communityService.findNoticeOne(id)
  }
}

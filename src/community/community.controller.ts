import { Body, Controller, Get, Param, Post, Query, Version } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiSecurity, ApiTags } from '@nestjs/swagger'
import { CommunityService } from '@community/community.service'
import { CreateReviewDto, QueryEventsDto, QueryNoticesDto, QueryReviewsDto } from '@community/dto'
import { Event, Notice, Review } from '@community/entities'

@ApiTags('커뮤니티')
@ApiSecurity('x-api-key')
@Controller('community')
export class CommunityController {
  constructor(private readonly communityService: CommunityService) {}

  @ApiOperation({ summary: '다건 이벤트 조회' })
  @ApiResponse({
    status: 200,
    description: '성공적으로 이벤트 목록을 조회했습니다.',
    type: Event,
    isArray: true
  })
  @Version('1')
  @Get('event')
  findEventAll(@Query() query: QueryEventsDto) {
    return this.communityService.findEventAll(query)
  }

  @ApiOperation({ summary: '단건 이벤트 조회' })
  @ApiResponse({
    status: 200,
    description: '성공적으로 이벤트를 조회했습니다.',
    type: Event
  })
  @Version('1')
  @Get('event/:event_id')
  findEventOne(@Param('event_id') event_id: string) {
    return this.communityService.findEventOne(event_id)
  }

  @ApiOperation({ summary: '다건 공지사항 조회' })
  @ApiResponse({
    status: 200,
    description: '성공적으로 공지사항 목록을 조회했습니다.',
    type: Notice,
    isArray: true
  })
  @Version('1')
  @Get('notice')
  async findNoticeAll(@Query() query: QueryNoticesDto) {
    return await this.communityService.findNoticeAll(query)
  }

  @ApiOperation({ summary: '단건 이벤트 조회' })
  @ApiResponse({
    status: 200,
    description: '성공적으로 공지사항을 조회했습니다.',
    type: Notice
  })
  @Version('1')
  @Get('notice/:notice_id')
  async findNoticeOne(@Param('notice_id') notice_id: string) {
    return await this.communityService.findNoticeOne(notice_id)
  }

  @ApiOperation({ summary: '리뷰 작성' })
  @Version('1')
  @Post('review')
  async createReview(@Body() createReviewDto: CreateReviewDto) {
    return await this.communityService.createReview(createReviewDto)
  }

  @ApiOperation({ summary: '다건 리뷰 조회' })
  @ApiResponse({
    status: 200,
    description: '성공적으로 리뷰리스트를 조회했습니다.',
    type: Review,
    isArray: true
  })
  @Version('1')
  @Get('review')
  async findReviewAll(@Query() query: QueryReviewsDto) {
    return await this.communityService.findReviewAll(query)
  }
}

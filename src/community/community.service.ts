import { Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Like, Repository } from 'typeorm'
import { CreateReviewDto, QueryEventsDto, QueryNoticesDto, QueryReviewsDto } from '@community/dto'
import { Event, Notice, Review } from '@community/entities'

@Injectable()
export class CommunityService {
  private readonly logger = new Logger(CommunityService.name)

  constructor(
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>,
    @InjectRepository(Notice)
    private readonly noticeRepository: Repository<Notice>,
    @InjectRepository(Review)
    private readonly reviewRepository: Repository<Review>
  ) {}

  async findEventAll({ page, limit, search_text }: QueryEventsDto): Promise<Event[] | null> {
    try {
      return await this.eventRepository.find({
        ...(search_text && {
          where: [
            { event_name: Like(`%${search_text}%`) },
            { event_summary: Like(`%${search_text}%`) },
            { event_content: Like(`%${search_text}%`) }
          ]
        }),
        skip: (page - 1) * limit,
        take: limit,
        order: { created_at: 'desc' }
      })
    } catch (error) {
      this.logger.error(error)
      throw new InternalServerErrorException('서버에서 이벤트를 가져오는 중 오류가 발생하였습니다')
    }
  }

  async findEventOne(event_id: string): Promise<Event> {
    try {
      const event = await this.eventRepository.findOne({
        where: { event_id }
      })
      if (!event) {
        throw new NotFoundException(`ID ${event_id}에 해당하는 이벤트를 찾을 수 없습니다.`)
      }
      return event
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error
      }
      this.logger.error(error)
      throw new InternalServerErrorException('서버에서 이벤트를 가져오는 중 오류가 발생하였습니다')
    }
  }

  async findNoticeAll({ page, limit, search_text }: QueryNoticesDto): Promise<Notice[] | null> {
    try {
      return await this.noticeRepository.find({
        where: {
          notice_is_active: true,
          ...(search_text && [{ notice_title: Like(`%${search_text}%`) }, { notice_content: Like(`%${search_text}%`) }])
        },
        skip: (page - 1) * limit,
        take: limit,
        order: { created_at: 'desc' }
      })
    } catch (error) {
      this.logger.error(error)
      throw new InternalServerErrorException('서버에서 공지사항을 가져오는 중 오류가 발생하였습니다')
    }
  }

  async findNoticeOne(notice_id: string): Promise<Notice> {
    try {
      const event = await this.noticeRepository.findOne({
        where: { notice_id }
      })
      if (!event) {
        throw new NotFoundException(`ID ${notice_id}에 해당하는 공지사항을 찾을 수 없습니다.`)
      }
      return event
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error
      }
      this.logger.error(error)
      throw new InternalServerErrorException('서버에서 공지사항을 가져오는 중 오류가 발생하였습니다')
    }
  }

  async createReview(createReviewDto: CreateReviewDto): Promise<Review> {
    try {
      const review = this.reviewRepository.create({
        ...createReviewDto
      })

      return await this.reviewRepository.save(review)
    } catch (error) {
      this.logger.error(error)
      throw new InternalServerErrorException('리뷰작성 중 오류가 발생했습니다.')
    }
  }

  async findReviewAll({ book_id, user_id, page, limit }: QueryReviewsDto): Promise<Review[] | null> {
    try {
      return await this.reviewRepository.find({
        where: {
          ...(book_id && { book_id }),
          ...(user_id && { user_id })
        },
        skip: (page - 1) * limit,
        take: limit,
        order: { created_at: 'desc' }
      })
    } catch (error) {
      this.logger.error(error)
      throw new InternalServerErrorException('서버에서 공지사항을 가져오는 중 오류가 발생하였습니다')
    }
  }
}

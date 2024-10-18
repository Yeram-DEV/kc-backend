import { Repository } from 'typeorm';
import { CreateReviewDto, QueryEventsDto, QueryNoticesDto, QueryReviewsDto } from '@community/dto';
import { Event, Notice, Review } from '@community/entities';
export declare class CommunityService {
    private readonly eventRepository;
    private readonly noticeRepository;
    private readonly reviewRepository;
    private readonly logger;
    constructor(eventRepository: Repository<Event>, noticeRepository: Repository<Notice>, reviewRepository: Repository<Review>);
    findEventAll({ page, limit, search_text }: QueryEventsDto): Promise<Event[] | null>;
    findEventOne(event_id: string): Promise<Event>;
    findNoticeAll({ page, limit, search_text }: QueryNoticesDto): Promise<Notice[] | null>;
    findNoticeOne(notice_id: string): Promise<Notice>;
    createReview(createReviewDto: CreateReviewDto): Promise<Review>;
    findReviewAll({ book_id, user_id, page, limit }: QueryReviewsDto): Promise<Review[] | null>;
}

import { CommunityService } from '@community/community.service';
import { CreateReviewDto, QueryEventsDto, QueryNoticesDto, QueryReviewsDto } from '@community/dto';
import { Event, Notice, Review } from '@community/entities';
export declare class CommunityController {
    private readonly communityService;
    constructor(communityService: CommunityService);
    findEventAll(query: QueryEventsDto): Promise<Event[]>;
    findEventOne(event_id: string): Promise<Event>;
    findNoticeAll(query: QueryNoticesDto): Promise<Notice[]>;
    findNoticeOne(notice_id: string): Promise<Notice>;
    createReview(createReviewDto: CreateReviewDto): Promise<Review>;
    findReviewAll(query: QueryReviewsDto): Promise<Review[]>;
}

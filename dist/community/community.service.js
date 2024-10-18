"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var CommunityService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommunityService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const entities_1 = require("./entities");
let CommunityService = CommunityService_1 = class CommunityService {
    constructor(eventRepository, noticeRepository, reviewRepository) {
        this.eventRepository = eventRepository;
        this.noticeRepository = noticeRepository;
        this.reviewRepository = reviewRepository;
        this.logger = new common_1.Logger(CommunityService_1.name);
    }
    async findEventAll({ page, limit, search_text }) {
        try {
            return await this.eventRepository.find({
                ...(search_text && {
                    where: [
                        { event_name: (0, typeorm_2.Like)(`%${search_text}%`) },
                        { event_summary: (0, typeorm_2.Like)(`%${search_text}%`) },
                        { event_content: (0, typeorm_2.Like)(`%${search_text}%`) }
                    ]
                }),
                skip: (page - 1) * limit,
                take: limit,
                order: { created_at: 'desc' }
            });
        }
        catch (error) {
            this.logger.error(error);
            throw new common_1.InternalServerErrorException('서버에서 이벤트를 가져오는 중 오류가 발생하였습니다');
        }
    }
    async findEventOne(event_id) {
        try {
            const event = await this.eventRepository.findOne({
                where: { event_id }
            });
            if (!event) {
                throw new common_1.NotFoundException(`ID ${event_id}에 해당하는 이벤트를 찾을 수 없습니다.`);
            }
            return event;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            this.logger.error(error);
            throw new common_1.InternalServerErrorException('서버에서 이벤트를 가져오는 중 오류가 발생하였습니다');
        }
    }
    async findNoticeAll({ page, limit, search_text }) {
        try {
            return await this.noticeRepository.find({
                where: {
                    notice_is_active: true,
                    ...(search_text && [{ notice_title: (0, typeorm_2.Like)(`%${search_text}%`) }, { notice_content: (0, typeorm_2.Like)(`%${search_text}%`) }])
                },
                skip: (page - 1) * limit,
                take: limit,
                order: { created_at: 'desc' }
            });
        }
        catch (error) {
            this.logger.error(error);
            throw new common_1.InternalServerErrorException('서버에서 공지사항을 가져오는 중 오류가 발생하였습니다');
        }
    }
    async findNoticeOne(notice_id) {
        try {
            const event = await this.noticeRepository.findOne({
                where: { notice_id }
            });
            if (!event) {
                throw new common_1.NotFoundException(`ID ${notice_id}에 해당하는 공지사항을 찾을 수 없습니다.`);
            }
            return event;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            this.logger.error(error);
            throw new common_1.InternalServerErrorException('서버에서 공지사항을 가져오는 중 오류가 발생하였습니다');
        }
    }
    async createReview(createReviewDto) {
        try {
            const review = this.reviewRepository.create({
                ...createReviewDto
            });
            return await this.reviewRepository.save(review);
        }
        catch (error) {
            this.logger.error(error);
            throw new common_1.InternalServerErrorException('리뷰작성 중 오류가 발생했습니다.');
        }
    }
    async findReviewAll({ book_id, user_id, page, limit }) {
        try {
            return await this.reviewRepository.find({
                where: {
                    ...(book_id && { book_id }),
                    ...(user_id && { user_id })
                },
                skip: (page - 1) * limit,
                take: limit,
                order: { created_at: 'desc' }
            });
        }
        catch (error) {
            this.logger.error(error);
            throw new common_1.InternalServerErrorException('서버에서 공지사항을 가져오는 중 오류가 발생하였습니다');
        }
    }
};
exports.CommunityService = CommunityService;
exports.CommunityService = CommunityService = CommunityService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entities_1.Event)),
    __param(1, (0, typeorm_1.InjectRepository)(entities_1.Notice)),
    __param(2, (0, typeorm_1.InjectRepository)(entities_1.Review)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], CommunityService);
//# sourceMappingURL=community.service.js.map
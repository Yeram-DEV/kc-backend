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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommunityController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const community_service_1 = require("./community.service");
const dto_1 = require("./dto");
const entities_1 = require("./entities");
let CommunityController = class CommunityController {
    constructor(communityService) {
        this.communityService = communityService;
    }
    findEventAll(query) {
        return this.communityService.findEventAll(query);
    }
    findEventOne(event_id) {
        return this.communityService.findEventOne(event_id);
    }
    async findNoticeAll(query) {
        return await this.communityService.findNoticeAll(query);
    }
    async findNoticeOne(notice_id) {
        return await this.communityService.findNoticeOne(notice_id);
    }
    async createReview(createReviewDto) {
        return await this.communityService.createReview(createReviewDto);
    }
    async findReviewAll(query) {
        return await this.communityService.findReviewAll(query);
    }
};
exports.CommunityController = CommunityController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '다건 이벤트 조회' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: '성공적으로 이벤트 목록을 조회했습니다.',
        type: entities_1.Event,
        isArray: true
    }),
    (0, common_1.Version)('1'),
    (0, common_1.Get)('event'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.QueryEventsDto]),
    __metadata("design:returntype", void 0)
], CommunityController.prototype, "findEventAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '단건 이벤트 조회' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: '성공적으로 이벤트를 조회했습니다.',
        type: entities_1.Event
    }),
    (0, common_1.Version)('1'),
    (0, common_1.Get)('event/:event_id'),
    __param(0, (0, common_1.Param)('event_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CommunityController.prototype, "findEventOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '다건 공지사항 조회' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: '성공적으로 공지사항 목록을 조회했습니다.',
        type: entities_1.Notice,
        isArray: true
    }),
    (0, common_1.Version)('1'),
    (0, common_1.Get)('notice'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.QueryNoticesDto]),
    __metadata("design:returntype", Promise)
], CommunityController.prototype, "findNoticeAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '단건 이벤트 조회' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: '성공적으로 공지사항을 조회했습니다.',
        type: entities_1.Notice
    }),
    (0, common_1.Version)('1'),
    (0, common_1.Get)('notice/:notice_id'),
    __param(0, (0, common_1.Param)('notice_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CommunityController.prototype, "findNoticeOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '리뷰 작성' }),
    (0, common_1.Version)('1'),
    (0, common_1.Post)('review'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateReviewDto]),
    __metadata("design:returntype", Promise)
], CommunityController.prototype, "createReview", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '다건 리뷰 조회' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: '성공적으로 리뷰리스트를 조회했습니다.',
        type: entities_1.Review,
        isArray: true
    }),
    (0, common_1.Version)('1'),
    (0, common_1.Get)('review'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.QueryReviewsDto]),
    __metadata("design:returntype", Promise)
], CommunityController.prototype, "findReviewAll", null);
exports.CommunityController = CommunityController = __decorate([
    (0, swagger_1.ApiTags)('커뮤니티'),
    (0, swagger_1.ApiSecurity)('x-api-key'),
    (0, common_1.Controller)('community'),
    __metadata("design:paramtypes", [community_service_1.CommunityService])
], CommunityController);
//# sourceMappingURL=community.controller.js.map
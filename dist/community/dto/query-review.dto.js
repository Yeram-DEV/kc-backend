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
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryReviewsDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const class_validator_2 = require("class-validator");
let AtLeastOneFieldValidator = class AtLeastOneFieldValidator {
    validate(_, args) {
        const { book_id, user_id } = args.object;
        return !!book_id || !!user_id;
    }
    defaultMessage() {
        return '필수 입력 항목 중 하나가 누락되었습니다.';
    }
};
AtLeastOneFieldValidator = __decorate([
    (0, class_validator_2.ValidatorConstraint)({ async: false })
], AtLeastOneFieldValidator);
class QueryReviewsDto {
    constructor() {
        this.page = 1;
        this.limit = 10;
    }
}
exports.QueryReviewsDto = QueryReviewsDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: '책 아이디로 검색합니다. 선택적이지만 user_id가 없으면 필수입니다.' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], QueryReviewsDto.prototype, "book_id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: '유저 아이디로 검색합니다. 선택적이지만 book_id가 없으면 필수입니다.' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], QueryReviewsDto.prototype, "user_id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: '조회할 페이지 번호입니다.', example: 1, minimum: 1 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], QueryReviewsDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: '페이지당 항목 수입니다.', example: 10, minimum: 1 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], QueryReviewsDto.prototype, "limit", void 0);
__decorate([
    (0, class_validator_1.Validate)(AtLeastOneFieldValidator),
    __metadata("design:type", Boolean)
], QueryReviewsDto.prototype, "checkAtLeastOne", void 0);
//# sourceMappingURL=query-review.dto.js.map
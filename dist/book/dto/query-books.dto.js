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
exports.QueryBooksDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const swagger_1 = require("@nestjs/swagger");
class QueryBooksDto {
    constructor() {
        this.page = 1;
        this.limit = 10;
    }
}
exports.QueryBooksDto = QueryBooksDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: '저자명으로 검색합니다.' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], QueryBooksDto.prototype, "book_author", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: '출판사명으로 검색합니다.' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], QueryBooksDto.prototype, "book_publisher", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: '책 이름으로 검색합니다.' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], QueryBooksDto.prototype, "book_name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: '카테고리 ID로 검색합니다.', example: 'em' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], QueryBooksDto.prototype, "book_category_id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: '조회할 페이지 번호입니다.', example: 1, minimum: 1 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], QueryBooksDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: '페이지당 항목 수입니다.', example: 10, minimum: 1 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], QueryBooksDto.prototype, "limit", void 0);
//# sourceMappingURL=query-books.dto.js.map
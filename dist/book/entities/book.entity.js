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
exports.Book = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const book_category_entity_1 = require("./book-category.entity");
let Book = class Book {
};
exports.Book = Book;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Book.prototype, "book_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ length: 13 }),
    __metadata("design:type", String)
], Book.prototype, "book_isbn13", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ length: 10 }),
    __metadata("design:type", String)
], Book.prototype, "book_category_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ length: 1000 }),
    __metadata("design:type", String)
], Book.prototype, "book_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ length: 500 }),
    __metadata("design:type", String)
], Book.prototype, "book_author", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ length: 500 }),
    __metadata("design:type", String)
], Book.prototype, "book_publisher", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], Book.prototype, "book_pub_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ length: 1000, nullable: true }),
    __metadata("design:type", String)
], Book.prototype, "book_cover_img_url", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)('text', { nullable: true }),
    __metadata("design:type", String)
], Book.prototype, "book_desc", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)('text', { nullable: true }),
    __metadata("design:type", String)
], Book.prototype, "book_toc", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Book.prototype, "updated_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Book.prototype, "created_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.OneToOne)(() => book_category_entity_1.BookCategory),
    (0, typeorm_1.JoinColumn)({ name: 'book_category_id' }),
    __metadata("design:type", book_category_entity_1.BookCategory)
], Book.prototype, "book_category", void 0);
exports.Book = Book = __decorate([
    (0, typeorm_1.Entity)('book')
], Book);
//# sourceMappingURL=book.entity.js.map
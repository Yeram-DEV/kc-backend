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
exports.BookController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const dto_1 = require("./dto");
const entities_1 = require("./entities");
const book_service_1 = require("./book.service");
let BookController = class BookController {
    constructor(bookService) {
        this.bookService = bookService;
    }
    async findBookAll(query) {
        return await this.bookService.findAll(query);
    }
    async findBookOne(book_id) {
        return await this.bookService.findOne(book_id);
    }
};
exports.BookController = BookController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '다건 책 조회' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: '성공적으로 책 목록을 조회했습니다.',
        type: entities_1.Book,
        isArray: true
    }),
    (0, common_1.Version)('1'),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.QueryBooksDto]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "findBookAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '단건 책 조회' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: '성공적으로 책을 조회했습니다.',
        type: entities_1.Book
    }),
    (0, common_1.Version)('1'),
    (0, common_1.Get)(':book_id'),
    __param(0, (0, common_1.Param)('book_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "findBookOne", null);
exports.BookController = BookController = __decorate([
    (0, swagger_1.ApiTags)('책'),
    (0, swagger_1.ApiSecurity)('x-api-key'),
    (0, common_1.Controller)('book'),
    __metadata("design:paramtypes", [book_service_1.BookService])
], BookController);
//# sourceMappingURL=book.controller.js.map
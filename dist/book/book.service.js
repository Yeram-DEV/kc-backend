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
var BookService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const entities_1 = require("./entities");
let BookService = BookService_1 = class BookService {
    constructor(bookRepository) {
        this.bookRepository = bookRepository;
        this.logger = new common_1.Logger(BookService_1.name);
    }
    async findAll({ page, limit, book_name, book_author, book_publisher, ...filters }) {
        try {
            return await this.bookRepository.find({
                where: {
                    ...filters,
                    ...(book_name && { book_name: (0, typeorm_2.Like)(`%${book_name}%`) }),
                    ...(book_author && { book_author: (0, typeorm_2.Like)(`%${book_author}%`) }),
                    ...(book_publisher && { book_publisher: (0, typeorm_2.Like)(`%${book_publisher}%`) })
                },
                relations: ['book_category'],
                skip: (page - 1) * limit,
                take: limit,
                order: { created_at: 'desc' }
            });
        }
        catch (error) {
            this.logger.error(error);
            throw new common_1.InternalServerErrorException('서버에서 책을 가져오는 중 오류가 발생했습니다.');
        }
    }
    async findOne(book_id) {
        try {
            const book = await this.bookRepository.findOne({
                where: { book_id },
                relations: ['book_category']
            });
            if (!book) {
                throw new common_1.NotFoundException(`ID ${book_id}에 해당하는 책을 찾을 수 없습니다.`);
            }
            return book;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            this.logger.error(error);
            throw new common_1.InternalServerErrorException('서버에서 책을 가져오는 중 오류가 발생했습니다.');
        }
    }
};
exports.BookService = BookService;
exports.BookService = BookService = BookService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entities_1.Book)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BookService);
//# sourceMappingURL=book.service.js.map
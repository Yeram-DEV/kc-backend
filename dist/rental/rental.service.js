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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var RentalService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RentalService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const entities_1 = require("./entities");
const date_1 = require("../utils/date");
const dayjs_1 = __importDefault(require("dayjs"));
let RentalService = RentalService_1 = class RentalService {
    constructor(rentalRepository, returnRepository) {
        this.rentalRepository = rentalRepository;
        this.returnRepository = returnRepository;
        this.logger = new common_1.Logger(RentalService_1.name);
    }
    async create(createRentalDto) {
        try {
            const existRental = await this.rentalRepository.findOne({
                where: { book_id: createRentalDto.book_id, user_id: createRentalDto.user_id }
            });
            if (existRental) {
                throw new common_1.ConflictException('해당 책은 이미 대여 중입니다.');
            }
            const rental = this.rentalRepository.create({
                ...createRentalDto,
                rental_date: (0, dayjs_1.default)().toDate(),
                rental_due_date: (0, date_1.addBusinessDays)(14)
            });
            return await this.rentalRepository.save(rental);
        }
        catch (error) {
            if (error instanceof common_1.ConflictException) {
                throw error;
            }
            this.logger.error(`대여 생성 실패: ${error.message}`, error.stack);
            throw new common_1.InternalServerErrorException('대여 생성에 실패했습니다.');
        }
    }
    async findOne({ book_id, user_id }) {
        try {
            return await this.rentalRepository.findOne({ where: { book_id, ...(user_id && { user_id }) } });
        }
        catch (error) {
            this.logger.error(error);
            throw new common_1.InternalServerErrorException('서버에서 대여정보를 가져오는 중 오류가 발생했습니다.');
        }
    }
    async remove(rental_id) {
        try {
            const rental = await this.rentalRepository.findOne({ where: { rental_id } });
            if (!rental) {
                throw new common_1.NotFoundException(`${rental_id}에 해당하는 대여 기록을 찾을 수 없습니다.`);
            }
            const result = await this.rentalRepository.delete(rental_id);
            if (!!result.affected) {
                const returnRecord = this.returnRepository.create({
                    user_id: rental.user_id,
                    book_id: rental.book_id
                });
                await this.returnRepository.save(returnRecord);
            }
            return !!result.affected;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            this.logger.error(error);
            throw new common_1.InternalServerErrorException('서버에서 반납 중 오류가 발생했습니다.');
        }
    }
};
exports.RentalService = RentalService;
exports.RentalService = RentalService = RentalService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(entities_1.Rental)),
    __param(1, (0, typeorm_2.InjectRepository)(entities_1.Return)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository])
], RentalService);
//# sourceMappingURL=rental.service.js.map
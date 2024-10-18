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
var WaitService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WaitService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const entities_1 = require("./entities");
let WaitService = WaitService_1 = class WaitService {
    constructor(waitRepository) {
        this.waitRepository = waitRepository;
        this.logger = new common_1.Logger(WaitService_1.name);
    }
    async create(createWaitDto) {
        try {
            const existingWaits = await this.waitRepository.count({
                where: { book_id: createWaitDto.book_id }
            });
            const wait = this.waitRepository.create({
                ...createWaitDto,
                wait_order_num: existingWaits + 1
            });
            return await this.waitRepository.save(wait);
        }
        catch (error) {
            this.logger.error(error);
            throw new common_1.InternalServerErrorException('대기 목록에 추가하는 중 오류가 발생했습니다.');
        }
    }
    async findAll({ book_id, user_id }) {
        try {
            return await this.waitRepository.find({
                where: { book_id, ...(user_id && { user_id }) },
                order: { wait_order_num: 'ASC' }
            });
        }
        catch (error) {
            this.logger.error(error);
            throw new common_1.InternalServerErrorException('대기 목록을 불러오는 중 오류가 발생했습니다.');
        }
    }
    async remove(wait_id) {
        try {
            const wait = await this.waitRepository.findOne({ where: { wait_id } });
            if (!wait) {
                throw new common_1.NotFoundException('해당 대기 기록을 찾을 수 없습니다.');
            }
            const deleteResult = await this.waitRepository.delete(wait_id);
            if (!deleteResult.affected) {
                return false;
            }
            const remainingWaits = await this.waitRepository.find({
                where: { book_id: wait.book_id },
                order: { wait_order_num: 'ASC' }
            });
            await Promise.all(remainingWaits.map((remainingWait, index) => {
                remainingWait.wait_order_num = index + 1;
                return this.waitRepository.save(remainingWait);
            }));
            return !!deleteResult.affected;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            this.logger.error(error);
            throw new common_1.InternalServerErrorException('대기 취소 중 오류가 발생했습니다.');
        }
    }
};
exports.WaitService = WaitService;
exports.WaitService = WaitService = WaitService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entities_1.Wait)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], WaitService);
//# sourceMappingURL=wait.service.js.map
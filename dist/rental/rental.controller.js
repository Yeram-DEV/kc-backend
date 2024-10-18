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
exports.RentalController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const dto_1 = require("./dto");
const entities_1 = require("./entities");
const rental_service_1 = require("./rental.service");
let RentalController = class RentalController {
    constructor(rentalService) {
        this.rentalService = rentalService;
    }
    async createRental(createRentalDto) {
        return await this.rentalService.create(createRentalDto);
    }
    async findRentalOne(query) {
        return await this.rentalService.findOne(query);
    }
    async removeRental(rental_id) {
        return await this.rentalService.remove(rental_id);
    }
};
exports.RentalController = RentalController;
__decorate([
    (0, swagger_1.ApiTags)('대여'),
    (0, swagger_1.ApiOperation)({ summary: '대여하기 대여정보를 생성합니다' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: '성공적으로 대여정보를 생성했습니다.',
        type: entities_1.Rental
    }),
    (0, common_1.Version)('1'),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateRentalDto]),
    __metadata("design:returntype", Promise)
], RentalController.prototype, "createRental", null);
__decorate([
    (0, swagger_1.ApiTags)('대여'),
    (0, swagger_1.ApiOperation)({ summary: '대여 정보 조회' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: '성공적으로 대여정보를 조회했습니다.',
        type: entities_1.Rental
    }),
    (0, common_1.Version)('1'),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.QueryRentalDto]),
    __metadata("design:returntype", Promise)
], RentalController.prototype, "findRentalOne", null);
__decorate([
    (0, swagger_1.ApiTags)('반납'),
    (0, swagger_1.ApiOperation)({ summary: '반납 하기 대여정보를 삭제합니다' }),
    (0, common_1.Version)('1'),
    (0, common_1.Delete)(':rental_id'),
    __param(0, (0, common_1.Param)('rental_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RentalController.prototype, "removeRental", null);
exports.RentalController = RentalController = __decorate([
    (0, swagger_1.ApiSecurity)('x-api-key'),
    (0, common_1.Controller)('rental'),
    __metadata("design:paramtypes", [rental_service_1.RentalService])
], RentalController);
//# sourceMappingURL=rental.controller.js.map
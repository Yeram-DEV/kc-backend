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
exports.WaitController = void 0;
const common_1 = require("@nestjs/common");
const wait_service_1 = require("./wait.service");
const dto_1 = require("./dto");
const swagger_1 = require("@nestjs/swagger");
const entities_1 = require("./entities");
let WaitController = class WaitController {
    constructor(waitService) {
        this.waitService = waitService;
    }
    async createWait(createWaitDto) {
        return await this.waitService.create(createWaitDto);
    }
    async findWaitAll(query) {
        return await this.waitService.findAll(query);
    }
    async removeWait(wait_id) {
        return await this.waitService.remove(wait_id);
    }
};
exports.WaitController = WaitController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '대기자를 생성합니다.' }),
    (0, common_1.Version)('1'),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateWaitDto]),
    __metadata("design:returntype", Promise)
], WaitController.prototype, "createWait", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '대기자를 조회합니다.' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: '성공적으로 대기자 리스트를 조회했습니다.',
        type: entities_1.Wait,
        isArray: true
    }),
    (0, common_1.Version)('1'),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.QueryWaitDto]),
    __metadata("design:returntype", Promise)
], WaitController.prototype, "findWaitAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '대기자를 삭제(취소)합니다' }),
    (0, common_1.Version)('1'),
    (0, common_1.Delete)(':wait_id'),
    __param(0, (0, common_1.Param)('wait_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WaitController.prototype, "removeWait", null);
exports.WaitController = WaitController = __decorate([
    (0, swagger_1.ApiTags)('대기'),
    (0, swagger_1.ApiSecurity)('x-api-key'),
    (0, common_1.Controller)('wait'),
    __metadata("design:paramtypes", [wait_service_1.WaitService])
], WaitController);
//# sourceMappingURL=wait.controller.js.map
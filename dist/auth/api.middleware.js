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
var ApiMiddleware_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiMiddleware = void 0;
const common_1 = require("@nestjs/common");
const api_strategy_1 = require("./api.strategy");
let ApiMiddleware = ApiMiddleware_1 = class ApiMiddleware {
    constructor(apiKeyStrategy) {
        this.apiKeyStrategy = apiKeyStrategy;
        this.logger = new common_1.Logger(ApiMiddleware_1.name);
    }
    use(req, res, next) {
        try {
            this.apiKeyStrategy.validate(req);
            next();
        }
        catch (error) {
            this.logger.error(error);
            throw new common_1.UnauthorizedException('API 검증 실패');
        }
    }
};
exports.ApiMiddleware = ApiMiddleware;
exports.ApiMiddleware = ApiMiddleware = ApiMiddleware_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [api_strategy_1.ApiStrategy])
], ApiMiddleware);
//# sourceMappingURL=api.middleware.js.map
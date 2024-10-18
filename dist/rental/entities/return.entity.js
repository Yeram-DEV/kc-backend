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
exports.Return = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
let Return = class Return {
};
exports.Return = Return;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Return.prototype, "return_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)('uuid'),
    __metadata("design:type", String)
], Return.prototype, "user_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)('uuid'),
    __metadata("design:type", String)
], Return.prototype, "book_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Return.prototype, "updated_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Return.prototype, "created_at", void 0);
exports.Return = Return = __decorate([
    (0, typeorm_1.Entity)('return')
], Return);
//# sourceMappingURL=return.entity.js.map
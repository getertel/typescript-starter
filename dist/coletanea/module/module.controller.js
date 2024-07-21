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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModuleController = void 0;
const common_1 = require("@nestjs/common");
const coletanea_dto_1 = require("../coletanea/coletanea.dto");
(0, common_1.Controller)('Module');
class ModuleController {
    constructor(moduleService) {
        this.moduleService = moduleService;
    }
    async create(data) {
        return this.moduleService.create(data);
    }
}
exports.ModuleController = ModuleController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof coletanea_dto_1.ColetaneaDTO !== "undefined" && coletanea_dto_1.ColetaneaDTO) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], ModuleController.prototype, "create", null);
//# sourceMappingURL=module.controller.js.map
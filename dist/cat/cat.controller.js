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
exports.CatController = void 0;
const common_1 = require("@nestjs/common");
const create_cat_dto_1 = require("./dtos/create-cat-dto");
const cat_service_1 = require("./cat.service");
let CatController = class CatController {
    constructor(catService) {
        this.catService = catService;
    }
    listCats() {
        const cat = this.catService.findAll();
        if (cat) {
            throw new common_1.NotFoundException("I Am so Sorry");
        }
        return cat;
    }
    getCat(id) {
        console.log(id);
        return this.catService.findOne(id);
    }
    createCat(req, body) {
        return this.catService.create(body);
    }
};
__decorate([
    (0, common_1.Get)("/"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CatController.prototype, "listCats", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CatController.prototype, "getCat", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_cat_dto_1.CreateCatDto]),
    __metadata("design:returntype", void 0)
], CatController.prototype, "createCat", null);
CatController = __decorate([
    (0, common_1.Controller)("cat"),
    __metadata("design:paramtypes", [cat_service_1.CatService])
], CatController);
exports.CatController = CatController;
//# sourceMappingURL=cat.controller.js.map
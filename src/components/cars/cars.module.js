"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CarsModule = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var cars_resolver_1 = require("./cars.resolver");
var cars_service_1 = require("./cars.service");
var car_1 = require("./entities/car");
var CarsModule = /** @class */ (function () {
    function CarsModule() {
    }
    CarsModule = __decorate([
        (0, common_1.Module)({
            imports: [typeorm_1.TypeOrmModule.forFeature([car_1.Car])],
            providers: [cars_service_1.CarsService, cars_resolver_1.CarsResolver],
            exports: [cars_service_1.CarsService]
        })
    ], CarsModule);
    return CarsModule;
}());
exports.CarsModule = CarsModule;

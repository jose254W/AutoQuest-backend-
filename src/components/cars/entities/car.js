"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Car = void 0;
var graphql_1 = require("@nestjs/graphql");
var typeorm_1 = require("typeorm");
var Car = /** @class */ (function () {
    function Car() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
        (0, graphql_1.Field)()
    ], Car.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)(),
        (0, graphql_1.Field)()
    ], Car.prototype, "name");
    __decorate([
        (0, typeorm_1.Column)(),
        (0, graphql_1.Field)()
    ], Car.prototype, "dailyPrice");
    __decorate([
        (0, typeorm_1.Column)(),
        (0, graphql_1.Field)()
    ], Car.prototype, "monthlyPrice");
    __decorate([
        (0, typeorm_1.Column)(),
        (0, graphql_1.Field)()
    ], Car.prototype, "mileage");
    __decorate([
        (0, typeorm_1.Column)(),
        (0, graphql_1.Field)()
    ], Car.prototype, "gas");
    __decorate([
        (0, typeorm_1.Column)(),
        (0, graphql_1.Field)()
    ], Car.prototype, "gearType");
    __decorate([
        (0, typeorm_1.Column)(),
        (0, graphql_1.Field)()
    ], Car.prototype, "thumbnailUrl");
    Car = __decorate([
        (0, typeorm_1.Entity)({ name: 'cars' }),
        (0, graphql_1.ObjectType)()
    ], Car);
    return Car;
}());
exports.Car = Car;

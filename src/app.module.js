"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var common_1 = require("@nestjs/common");
var app_controller_1 = require("./app.controller");
var app_service_1 = require("./app.service");
var config_1 = require("@nestjs/config");
var database_module_1 = require("./database/database.module");
var graphql_1 = require("@nestjs/graphql");
var apollo_1 = require("@nestjs/apollo");
var components_module_1 = require("./components/components.module");
var controller_module_1 = require("./controller/controller.module");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        (0, common_1.Module)({
            imports: [
                config_1.ConfigModule.forRoot(),
                database_module_1.DatabaseModule,
                graphql_1.GraphQLModule.forRoot({
                    driver: apollo_1.ApolloDriver,
                    playground: true,
                    debug: true,
                    autoSchemaFile: true,
                    sortSchema: true
                }),
                components_module_1.ComponentsModule,
            ],
            controllers: [app_controller_1.AppController, controller_module_1.RentalController],
            providers: [app_service_1.AppService]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

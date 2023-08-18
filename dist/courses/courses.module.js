"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoursesModule = void 0;
const common_1 = require("@nestjs/common");
const courses_controller_1 = require("./courses.controller");
const courses_service_1 = require("./courses.service");
const database_module_1 = require("../database/database.module");
const courses_providers_1 = require("./courses.providers");
let CoursesModule = exports.CoursesModule = class CoursesModule {
};
exports.CoursesModule = CoursesModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        controllers: [courses_controller_1.CoursesController],
        providers: [...courses_providers_1.coursesProviders, courses_service_1.CoursesService],
    })
], CoursesModule);
//# sourceMappingURL=courses.module.js.map
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
exports.CoursesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
let CoursesService = exports.CoursesService = class CoursesService {
    async findAll() {
        return this.courseRepository.find({ relations: ['tags'] });
    }
    async findOne(id) {
        const course = await this.courseRepository.findOne({
            where: {
                id: id,
            },
            relations: ['tags'],
        });
        if (!course) {
            throw new common_1.NotFoundException(`Course ID #${id} not found`);
        }
        return course;
    }
    async create(createCourseDto) {
        const tags = await Promise.all(createCourseDto.tags.map((name) => this.preloagTagByName(name)));
        const course = this.courseRepository.create({
            ...createCourseDto,
            tags,
        });
        return this.courseRepository.save(course);
    }
    async update(id, updateCourseDto) {
        const tags = updateCourseDto.tags &&
            (await Promise.all(updateCourseDto.tags.map((name) => this.preloagTagByName(name))));
        const course = await this.courseRepository.preload({
            id: id,
            ...updateCourseDto,
            tags,
        });
        if (!course) {
            throw new common_1.NotFoundException(`Course ID #${id} not found`);
        }
        return this.courseRepository.save(course);
    }
    async remove(id) {
        const course = await this.courseRepository.findOne({
            where: {
                id: id,
            },
        });
        if (!course) {
            throw new common_1.NotFoundException(`Course ID #${id} not found`);
        }
        return this.courseRepository.remove(course);
    }
    async preloagTagByName(name) {
        const tag = await this.tagRepository.findOne({
            where: {
                name: name,
            },
        });
        if (tag) {
            return tag;
        }
        return this.tagRepository.create({ name });
    }
};
__decorate([
    (0, common_1.Inject)('COURSES_REPOSITORY'),
    __metadata("design:type", typeorm_1.Repository)
], CoursesService.prototype, "courseRepository", void 0);
__decorate([
    (0, common_1.Inject)('TAGS_REPOSITORY'),
    __metadata("design:type", typeorm_1.Repository)
], CoursesService.prototype, "tagRepository", void 0);
exports.CoursesService = CoursesService = __decorate([
    (0, common_1.Injectable)()
], CoursesService);
//# sourceMappingURL=courses.service.js.map
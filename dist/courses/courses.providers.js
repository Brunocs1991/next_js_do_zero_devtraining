"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.coursesProviders = void 0;
const course_entity_1 = require("./entities/course.entity");
const tag_entity_1 = require("./entities/tag.entity");
exports.coursesProviders = [
    {
        provide: 'COURSES_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(course_entity_1.Course),
        inject: ['DATA_SOURCE'],
    },
    {
        provide: 'TAGS_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(tag_entity_1.Tag),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=courses.providers.js.map
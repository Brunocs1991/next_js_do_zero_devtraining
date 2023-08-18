"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddCoursesIdToCoursesTagsTable1692223882180 = void 0;
const typeorm_1 = require("typeorm");
class AddCoursesIdToCoursesTagsTable1692223882180 {
    async up(queryRunner) {
        await queryRunner.addColumn('courses_tags', new typeorm_1.TableColumn({
            name: 'coursesId',
            type: 'uuid',
            isNullable: true,
        }));
        await queryRunner.createForeignKey('courses_tags', new typeorm_1.TableForeignKey({
            name: 'courses_tags_courses',
            columnNames: ['coursesId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'courses',
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropForeignKey('courses_tags', 'courses_tags_courses');
        await queryRunner.dropColumn('courses_tags', 'coursesId');
    }
}
exports.AddCoursesIdToCoursesTagsTable1692223882180 = AddCoursesIdToCoursesTagsTable1692223882180;
//# sourceMappingURL=1692223882180-AddCoursesIdToCoursesTagsTable.js.map
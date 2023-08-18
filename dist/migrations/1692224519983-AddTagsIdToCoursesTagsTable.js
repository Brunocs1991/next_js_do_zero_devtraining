"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTagsIdToCoursesTagsTable1692224519983 = void 0;
const typeorm_1 = require("typeorm");
class AddTagsIdToCoursesTagsTable1692224519983 {
    async up(queryRunner) {
        await queryRunner.addColumn('courses_tags', new typeorm_1.TableColumn({
            name: 'tagsId',
            type: 'uuid',
            isNullable: true,
        }));
        await queryRunner.createForeignKey('courses_tags', new typeorm_1.TableForeignKey({
            name: 'courses_tags_tags',
            columnNames: ['tagsId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'tags',
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropForeignKey('courses_tags', 'courses_tags_tags');
        await queryRunner.dropColumn('courses_tags', 'tagsId');
    }
}
exports.AddTagsIdToCoursesTagsTable1692224519983 = AddTagsIdToCoursesTagsTable1692224519983;
//# sourceMappingURL=1692224519983-AddTagsIdToCoursesTagsTable.js.map
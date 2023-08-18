"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCoursesTagsTable1692223250652 = void 0;
const typeorm_1 = require("typeorm");
class CreateCoursesTagsTable1692223250652 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'courses_tags',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()',
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                },
            ],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('courses-tags');
    }
}
exports.CreateCoursesTagsTable1692223250652 = CreateCoursesTagsTable1692223250652;
//# sourceMappingURL=1692223250652-CreateCoursesTagsTable.js.map
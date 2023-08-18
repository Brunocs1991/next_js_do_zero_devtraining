"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCoursesTable1692220242413 = void 0;
const typeorm_1 = require("typeorm");
class CreateCoursesTable1692220242413 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'courses',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                },
                { name: 'name', type: 'varchar' },
                { name: 'description', type: 'varchar' },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                },
            ],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('courses');
    }
}
exports.CreateCoursesTable1692220242413 = CreateCoursesTable1692220242413;
//# sourceMappingURL=1692220242413-CreateCoursesTable.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTagsTable1692221427311 = void 0;
const typeorm_1 = require("typeorm");
class CreateTagsTable1692221427311 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'tags',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                },
                { name: 'name', type: 'varchar' },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                },
            ],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('tags');
    }
}
exports.CreateTagsTable1692221427311 = CreateTagsTable1692221427311;
//# sourceMappingURL=1692221427311-CreateTagsTable.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSource = exports.databaseProviders = void 0;
const typeorm_1 = require("typeorm");
const _1692220242413_CreateCoursesTable_1 = require("./migrations/1692220242413-CreateCoursesTable");
const _1692221427311_CreateTagsTable_1 = require("./migrations/1692221427311-CreateTagsTable");
const _1692223250652_CreateCoursesTagsTable_1 = require("./migrations/1692223250652-CreateCoursesTagsTable");
const _1692223882180_AddCoursesIdToCoursesTagsTable_1 = require("./migrations/1692223882180-AddCoursesIdToCoursesTagsTable");
const _1692224519983_AddTagsIdToCoursesTagsTable_1 = require("./migrations/1692224519983-AddTagsIdToCoursesTagsTable");
exports.databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new typeorm_1.DataSource({
                type: 'postgres',
                host: 'db',
                port: 5432,
                username: 'postgres',
                password: 'postgres',
                database: 'cursonestjs',
                entities: [__dirname + '/../**/*.entity.js'],
                synchronize: false,
            });
            return dataSource.initialize();
        },
    },
];
exports.dataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'db',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'cursonestjs',
    entities: [__dirname + '/../**/*.entity.js'],
    synchronize: false,
    migrations: [
        _1692220242413_CreateCoursesTable_1.CreateCoursesTable1692220242413,
        _1692221427311_CreateTagsTable_1.CreateTagsTable1692221427311,
        _1692223250652_CreateCoursesTagsTable_1.CreateCoursesTagsTable1692223250652,
        _1692223882180_AddCoursesIdToCoursesTagsTable_1.AddCoursesIdToCoursesTagsTable1692223882180,
        _1692224519983_AddTagsIdToCoursesTagsTable_1.AddTagsIdToCoursesTagsTable1692224519983,
    ],
});
//# sourceMappingURL=database.providers.js.map
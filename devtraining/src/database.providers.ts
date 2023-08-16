import { DataSource } from 'typeorm';
import { CreateCoursesTable1692220242413 } from './migrations/1692220242413-CreateCoursesTable';
import { CreateTagsTable1692221427311 } from './migrations/1692221427311-CreateTagsTable';
import { CreateCoursesTagsTable1692223250652 } from './migrations/1692223250652-CreateCoursesTagsTable';
import { AddCoursesIdToCoursesTagsTable1692223882180 } from './migrations/1692223882180-AddCoursesIdToCoursesTagsTable';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'db',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'postgres',
        entities: [__dirname + '/../**/*.entity.js'],
        synchronize: false,
      });

      return dataSource.initialize();
    },
  },
];

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'db',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  entities: [__dirname + '/../**/*.entity.js'],
  synchronize: false,
  migrations: [
    CreateCoursesTable1692220242413,
    CreateTagsTable1692221427311,
    CreateCoursesTagsTable1692223250652,
    AddCoursesIdToCoursesTagsTable1692223882180,
  ],
});

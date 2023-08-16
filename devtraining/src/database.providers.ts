import { DataSource } from 'typeorm';
import { CreateCoursesTable1692220242413 } from './migrations/1692220242413-CreateCoursesTable';
import { CreateTagsTable1692221427311 } from './migrations/1692221427311-CreateTagsTable';

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
  migrations: [CreateCoursesTable1692220242413, CreateTagsTable1692221427311],
});

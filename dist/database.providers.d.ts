import { DataSource } from 'typeorm';
export declare const databaseProviders: {
    provide: string;
    useFactory: () => Promise<DataSource>;
}[];
export declare const dataSource: DataSource;

import { DataSource } from 'typeorm';
import { Course } from './entities/course.entity';
import { Tag } from './entities/tag.entity';
export declare const coursesProviders: ({
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Course>;
    inject: string[];
} | {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Tag>;
    inject: string[];
})[];

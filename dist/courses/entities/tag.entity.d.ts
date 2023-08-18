import { Course } from './course.entity';
export declare class Tag {
    id: string;
    name: string;
    courses: Course[];
    created_at: Date;
    generatedId(): void;
}

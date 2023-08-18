import { Tag } from './tag.entity';
export declare class Course {
    id: string;
    name: string;
    description: string;
    tags: Tag[];
    created_at: Date;
    generatedId(): void;
}

import { Course } from './entities/course.entity';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
export declare class CoursesService {
    private readonly courseRepository;
    private readonly tagRepository;
    findAll(): Promise<Course[]>;
    findOne(id: string): Promise<Course>;
    create(createCourseDto: CreateCourseDto): Promise<Course>;
    update(id: string, updateCourseDto: UpdateCourseDto): Promise<Course>;
    remove(id: string): Promise<Course>;
    private preloagTagByName;
}

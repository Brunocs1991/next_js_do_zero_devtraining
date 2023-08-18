import { CoursesService } from './courses.service';
import { UpdateCourseDto } from './dto/update-course.dto';
import { CreateCourseDto } from './dto/create-course.dto';
export declare class CoursesController {
    private readonly coursesService;
    constructor(coursesService: CoursesService);
    findAll(): Promise<import("./entities/course.entity").Course[]>;
    findOne(id: string): Promise<import("./entities/course.entity").Course>;
    create(createCourseDto: CreateCourseDto): Promise<import("./entities/course.entity").Course>;
    update(id: string, updateCourseDto: UpdateCourseDto): Promise<import("./entities/course.entity").Course>;
    remove(id: string): Promise<import("./entities/course.entity").Course>;
}

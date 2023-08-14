import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  private courses: Course[] = [
    {
      id: 1,
      name: 'Fundamentos do framework NestJS',
      description: 'Fundamentos do framework NestJS',
      tags: ['node.js', 'nestjs', 'javascript'],
    },
  ];

  findAll(): Course[] {
    return this.courses;
  }

  findOne(id: string) {
    const course = this.courses.find((course) => course.id === Number(id));
    if (!course) {
      throw new HttpException(
        `Course ID #${id} not found`,
        HttpStatus.NOT_FOUND,
      );
    }
    return course;
  }

  create(createCourseDto: any) {
    this.courses.push(createCourseDto);
    return createCourseDto;
  }

  update(id: string, updateCourseDto: any): void {
    const indexCourse: number = this.courses.findIndex(
      (course: Course) => course.id === Number(id),
    );
    this.courses[indexCourse] = updateCourseDto;
  }

  remove(id: string): void {
    const indexCourse: number = this.courses.findIndex(
      (course: Course) => course.id === Number(id),
    );
    if (indexCourse >= 0) {
      this.courses.splice(indexCourse, 1);
    }
  }
}

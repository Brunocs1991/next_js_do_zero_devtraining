import { Injectable } from '@nestjs/common';
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

  findOne(id: string): Course {
    return this.courses.find((course) => course.id === Number(id));
  }

  create(createCourseDto: any): void {
    this.courses.push(createCourseDto);
  }

  update(id: string, updateCourseDTO: any): void {
    const indexCourse: number = this.courses.findIndex(
      (course: Course) => course.id === Number(id),
    );
    this.courses[indexCourse] = updateCourseDTO;
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

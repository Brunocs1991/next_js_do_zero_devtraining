import { Controller, Get } from '@nestjs/common';

@Controller()
export class CoursesController {
  @Get('courses')
  findAll(): string {
    return 'Lista de Cursos';
  }
}

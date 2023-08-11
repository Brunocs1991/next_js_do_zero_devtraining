import { Controller, Get, Param } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  @Get()
  findAll(): string {
    return 'Lista de Cursos';
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `Curso #${id}`;
  }
}

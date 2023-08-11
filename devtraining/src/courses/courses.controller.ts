import { Body, Controller, Get, Param, Post } from '@nestjs/common';

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

  @Post()
  create(@Body('name') body: any) {
    return body;
  }
}

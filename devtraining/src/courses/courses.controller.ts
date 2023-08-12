import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  @Get()
  findAll(@Res() response: any): string {
    return response.status(200).send('Lista de Cursos');
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `Curso #${id}`;
  }

  @Post()
  @HttpCode(HttpStatus.NO_CONTENT)
  create(@Body('name') body: any) {
    return body;
  }
}

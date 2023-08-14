import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
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
  create(@Body() body: any) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: any): string {
    console.log(body);
    return `Atuaização do curso #${id} `;
  }

  @Delete(':id')
  remove(@Param('id') id: string): string {
    return `Exclusão do curso #${id}`;
  }
}

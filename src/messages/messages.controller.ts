import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  index() {}

  @Post()
  create(@Body() body: any) {
    console.log(body);
  }

  @Get('/:id')
  show(@Param('id') id: string) {
    console.log(id);
  }
}

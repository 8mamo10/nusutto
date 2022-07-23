import { Controller, Get, Post, Query } from '@nestjs/common';
import { MemosService } from './memos.service';

@Controller('memos')
export class MemosController {
  constructor(private readonly service: MemosService) {}

  @Get()
  getMemoList() {
    return this.service.getMemoList();
  }

  @Post()
  addMemo(@Query() query: { name: string; description: string }) {
    return this.service.addMemo(query.name, query.description);
  }
}

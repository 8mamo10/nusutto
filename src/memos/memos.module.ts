import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MemosController } from './memos.controller';
import { MemosService } from './memos.service';
import { Memo } from 'src/memos/memo.entity';

@Module({
  controllers: [MemosController],
  imports: [TypeOrmModule.forFeature([Memo])],
  providers: [MemosService],
})
export class MemosModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MemosController } from './memos.controller';
import { MemosService } from './memos.service';
import { Memos } from 'src/memos/memos.entity';

@Module({
  controllers: [MemosController],
  imports: [TypeOrmModule.forFeature([Memos])],
  providers: [MemosService],
})
export class MemosModule {}

import { Injectable } from '@nestjs/common';
import { Memo } from 'src/memos/memo.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MemosService {
  constructor(
    @InjectRepository(Memo)
    private readonly memosRepository: Repository<Memo>,
  ) {}

  addMemo(name: string, description: string) {
    const memos = new Memo();
    memos.name = name;
    memos.description = description;
    return this.memosRepository.insert(memos);
  }

  getMemoList() {
    return this.memosRepository.find();
  }
}

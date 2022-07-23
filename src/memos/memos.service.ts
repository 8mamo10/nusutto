import { Injectable } from '@nestjs/common';
import { Memos } from 'src/memos/memos.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MemosService {
  constructor(
    @InjectRepository(Memos)
    private readonly memosRepository: Repository<Memos>,
  ) {}

  addMemo(name: string, description: string) {
    const memos = new Memos();
    memos.name = name;
    memos.description = description;
    return this.memosRepository.insert(memos);
  }

  getMemoList() {
    return this.memosRepository.find();
  }
}

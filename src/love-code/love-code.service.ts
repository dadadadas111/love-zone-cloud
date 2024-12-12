import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { CreateLoveCodeDto } from './dto/create-love-code.dto';
import { UpdateLoveCodeDto } from './dto/update-love-code.dto';

@Injectable()
export class LoveCodeService {

  constructor(
    @Inject('CACHE_MANAGER')
    private cacheManager: Cache,
  ) { }

  async create(createLoveCodeDto: CreateLoveCodeDto) {
    const { code, email } = createLoveCodeDto;
    const checkExisted = await this.cacheManager.get(`love-code:${code}`);
    if (checkExisted) {
      throw new BadRequestException('Code already used');
    }
    const result = await this.cacheManager.set(`love-code:${code}`, [email]);
    return result;
  }

  findAll() {
    return `This action returns all loveCode`;
  }

  findOne(id: number) {
    return `This action returns a #${id} loveCode`;
  }

  async update(updateLoveCodeDto: UpdateLoveCodeDto) {
    const { code, email } = updateLoveCodeDto;
    const dataInCache: string[] = await this.cacheManager.get(`love-code:${code}`);
    if (!dataInCache) {
      throw new BadRequestException('Code not found');
    }
    if (dataInCache.includes(email)) {
      throw new BadRequestException('Email already used');
    }
    if (dataInCache.length >= 2) {
      throw new BadRequestException('Code already used');
    }
    dataInCache.push(email);
    await this.cacheManager.set(`love-code:${code}`, dataInCache);
  }

  remove(id: number) {
    return `This action removes a #${id} loveCode`;
  }
}

import { Test, TestingModule } from '@nestjs/testing';
import { LoveCodeService } from './love-code.service';

describe('LoveCodeService', () => {
  let service: LoveCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoveCodeService],
    }).compile();

    service = module.get<LoveCodeService>(LoveCodeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

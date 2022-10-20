import { Test, TestingModule } from '@nestjs/testing';
import { RestosService } from './restos.service';

describe('RestosService', () => {
  let service: RestosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RestosService],
    }).compile();

    service = module.get<RestosService>(RestosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

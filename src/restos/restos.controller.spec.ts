import { Test, TestingModule } from '@nestjs/testing';
import { RestosController } from './restos.controller';

describe('RestosController', () => {
  let controller: RestosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RestosController],
    }).compile();

    controller = module.get<RestosController>(RestosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

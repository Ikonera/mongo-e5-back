import { Module } from '@nestjs/common';
import { RestosService } from './restos.service';
import { RestosController } from './restos.controller';

@Module({
  providers: [RestosService],
  controllers: [RestosController]
})
export class RestosModule {}

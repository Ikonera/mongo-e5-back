import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from "@nestjs/config";
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const configService: ConfigService = app.get(ConfigService);
  const port: number = configService.get("app_port");
  app.setBaseViewsDir(join(__dirname, "..", "views"));
  app.setViewEngine("pug");
  await app.listen(port);
  console.info(`Server started on : ${await app.getUrl()}`);
}

try {
	bootstrap();
}
catch (e) {
	console.error(e);
}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from "@nestjs/config";
import config from "./config";
import { DatabaseModule } from './database/database.module';
import { RestosModule } from './restos/restos.module';

@Module({
  imports: [
	ConfigModule.forRoot({
		load: [config],
		isGlobal: true,
		envFilePath: process.env.NODE_ENV === "production" ? ".env" : ".env.local",
	}),
	DatabaseModule,
	RestosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

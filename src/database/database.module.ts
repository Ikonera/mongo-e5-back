import { Module } from '@nestjs/common';
import { DatabaseController } from './database.controller';
import { DatabaseService } from './database.service';
import { MongooseModule } from "@nestjs/mongoose";
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Resto, RestoSchema } from "./schemas/resto.schema";

@Module({
  imports: [
	  MongooseModule.forRootAsync({
		  imports: [ConfigModule],
		  inject: [ConfigService],
		  useFactory: (configService: ConfigService) => ({
			  uri: configService.get("mongo_connector_url"),
			  dbName: "ny",
		  })
	  }),
	  MongooseModule.forFeature([{ name: Resto.name, schema: RestoSchema }])
  ],
  controllers: [DatabaseController],
  providers: [DatabaseService],
  exports: [DatabaseService]
})
export class DatabaseModule {}

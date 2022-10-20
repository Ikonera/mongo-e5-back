import { Controller, Get } from '@nestjs/common';
import { DatabaseService } from './database.service';

@Controller('database')
export class DatabaseController {
	constructor(private readonly databaseService: DatabaseService) {}

	@Get('grades')
	async grades() {
		return await this.databaseService.getAllAScoreByBoroughAndByCuisine();
	}
}

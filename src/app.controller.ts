import { Controller, Get, Render, Query, Res } from '@nestjs/common';
import { Response } from "express";
import { AppService } from './app.service';
import { DatabaseService } from './database/database.service';

@Controller()
export class AppController {
  constructor(private readonly databaseService: DatabaseService) {}

  @Get("restos")
  async searchByName(
	@Res() res: Response,
	@Query("name") searchName: string
  ) {
	const response = await this.databaseService.searchByName(searchName);
	res.render("page", { resto: response })
  }
	
  @Get("explore")
  async filter(
	  @Res() res: Response,
	  @Query("district") district: string,
	  @Query("cuisine") cuisine: string
  ) {
	const districts = await this.databaseService.getAllDistricts();
	const cuisines = await this.databaseService.getAllCuisineTypes();
	const filteredResults = await this.databaseService.searchByFilter(district, cuisine);
	res.render("explore", { districts, cuisines, filteredResults })
  }

  @Get("compare")
  async compare(
	@Res() res: Response,
	@Query("restoNameOne") restoNameOne: string,
	@Query("restoNameTwo") restoNameTwo: string
  ) {
	  const firstResto = await this.databaseService.searchByName(restoNameOne);
	  const secondResto = await this.databaseService.searchByName(restoNameTwo);
	  const allRestoNames = await this.databaseService.getAllRestoNames();

	  res.render("compare", { firstResto, secondResto, allRestoNames })
  }

}

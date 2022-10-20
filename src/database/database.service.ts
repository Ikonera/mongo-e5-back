import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Resto, RestoDocument } from './schemas/resto.schema';

@Injectable()
export class DatabaseService {
	constructor(@InjectModel(Resto.name) private restoModel: Model<RestoDocument>) {}

	searchByName = async (searchName: string) => {
		return await this.restoModel.findOne({
			name: searchName
		})
	}

	getAllDistricts = async () => {
		return await this.restoModel.distinct("borough");
	}

	getAllCuisineTypes = async () => {
		return await this.restoModel.distinct("cuisine");
	}

	searchByFilter = async (borough: string, cuisine: string) => {
		return await this.restoModel.find({
			cuisine,
			borough
		});
	}

	getAllRestoNames = async () => {
		return await this.restoModel.distinct("name");
	}

	getAllAScoreByBoroughAndByCuisine = async () => {
		const cuisines = await this.restoModel.distinct("cuisine");
		const borough = await this.restoModel.distinct("borough");
		const ranking = await this.restoModel.aggregate([
			{
				$match: { "grades.grade": 'A' }
			},
			{
				$project: {
					"name": 1,
					"cuisine": 1,
					"borough": 1,
					_id: 0
				}
			},
			{
				$group: {
					"_id": "&borough",
					total: { $sum: 1 }
				}
			},
			// {
			// 	$group: {
			// 		"_id": "$borough",
			// 		total: { $sum: 1}
			// 	}
			// }
		])

		return {
			ranking
		}
	}
}

import { Schema, SchemaFactory, Prop } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type RestoDocument = Resto & Document;

interface IGrade {
	date: Date
	grade: string
	score: number
}
interface IAddress {
	building: string
	coord: number[]
	street: string
	zipcode: string
}

@Schema()
export class Resto {
	@Prop({
		type: String,
	})
	name: string

	@Prop({
		type: Object,
	})
	address: IAddress

	@Prop({
		type: String,
	})
	borough: string

	@Prop({
		type: String
	})
	cuisine: string

	@Prop({
		type: Object
	})
	grades: IGrade[]

	@Prop({
		type: String
	})
	restaurant_id: string
}

export const RestoSchema = SchemaFactory.createForClass(Resto);

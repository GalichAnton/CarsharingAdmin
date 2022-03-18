import { ICar, ICategory } from "./CarInterface";
import { ICity } from "./CityInterfaces";
import { IRate } from "./RateInterface";

export interface IData {
  cars: { data: ICar[]; count: number };
  cities: { data: ICity[]; count: number };
  rates: { data: IRate[]; count: number };
  category: { data: ICategory[]; count: number };
}

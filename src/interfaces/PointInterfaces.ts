import { ICity } from "./CityInterfaces";

export interface IPoint {
  address: string;
  name: string;
  cityId: ICity;
  id: string;
}

export interface IPointsResponse {
  data: IPoint[];
}

export interface IPointResponse {
  data: IPoint;
}

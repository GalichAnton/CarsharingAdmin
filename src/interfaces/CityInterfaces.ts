export interface ICity {
  updatedAt: number;
  createdAt: number;
  name: string;
  id: string;
}
export interface ICityResponse {
  data: ICity[];
}

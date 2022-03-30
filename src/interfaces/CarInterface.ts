export interface IThumbnail {
  path: string;
  size: number;
  originalname: string;
  mimetype: string;
}
export interface ICategory {
  name: string;
  description: string;
  id: string;
}
export interface ICar {
  updatedAt: number;
  createdAt: number;
  description: string;
  priceMin: number;
  priceMax: number;
  name: string;
  number: string;
  categoryId: ICategory;
  thumbnail: IThumbnail;
  tank: number;
  colors: string[];
  id: string;
}
export type NewCarType = Omit<ICar, "updatedAt" | "createdAt" | "id">;
export interface ICarsResponse {
  data: ICar[];
  count: number;
}
export interface ICarResponse {
  data: ICar;
}

export interface ICategoryResponse {
  data: ICategory[];
}

interface IThumbnail {
  path: string;
  size: number;
  originalname: string;
  mimetype: string;
}
interface ICategoryId {
  name: string;
  description: string;
  id: string;
}
export interface ICar {
  description: string;
  priceMin: number;
  priceMax: number;
  name: string;
  number: string;
  categoryId: ICategoryId;
  thumbnail: IThumbnail;
  tank: number;
  colors: string[];
  id: string;
}

export interface ICarResponse {
  data: ICar[];
}

export interface IRate {
  price: number;
  rateTypeId: {
    unit: string;
    name: string;
    id: string;
  };
  id: string;
}

export interface IRateResponse {
  data: IRate[];
}

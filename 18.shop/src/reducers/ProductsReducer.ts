import { IProduct } from "../models/IProduct";

export interface IAction {
  type: ActionType,
  payload: string,
}

export enum ActionType {
  GOTPRODUCTS,
}

export const ProductsReducer = (products: IProduct[], action: IAction):IProduct[] => {

  if (action.type === ActionType.GOTPRODUCTS) {
    return JSON.parse(action.payload);
  }

  return products;
}
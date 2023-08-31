import { IProducts } from "./IProducts";

export class ShopCart {
  constructor (
      public products: IProducts[]
      //add later totalQuantity: number, totalPrice: number
  ) {}
}
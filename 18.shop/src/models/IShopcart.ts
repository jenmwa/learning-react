import { IProduct } from "./IProduct";

export interface IShopcart {
    products: IProduct[],
    totalAmount: number,
    totalPrice: number,
}
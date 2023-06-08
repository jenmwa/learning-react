import { IDonut } from "./IDonut";

export interface ICart {
    totalprice: number,
    totalamount: number,
    product: IDonut[],
}
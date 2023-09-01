import { IProduct } from "../models/IProduct"
import { IShopcart } from "../models/IShopcart";

export interface IAction {
  type: ActionType,
  payload: {
    product: IProduct,
  },
}

export enum ActionType {
  ADDED
}

export const ShopCartReducer = (shopCart: IShopcart, action: IAction) => {

  if (action.type === ActionType.ADDED) {
    const addedProduct = action.payload.product;

    const existingProductIndex = shopCart.products.findIndex(
      (product) => product.id === addedProduct.id
    );

    if (existingProductIndex !== -1) {
      const updatedProducts = [...shopCart.products];
      updatedProducts[existingProductIndex].amount++;
      const updatedTotalAmount = shopCart.totalAmount + 1;
      const updatedTotalPrice = shopCart.totalPrice + addedProduct.price;

      return {
        ...shopCart,
        products: updatedProducts,
        totalAmount: updatedTotalAmount,
        totalPrice: updatedTotalPrice,
      };
    } else {
      const updatedProducts = [...shopCart.products, { ...addedProduct, quantity: 1 }];
      const updatedTotalAmount = shopCart.totalAmount + 1;
      const updatedTotalPrice = shopCart.totalPrice + addedProduct.price;

      return {
        ...shopCart,
        products: updatedProducts,
        totalAmount: updatedTotalAmount,
        totalPrice: updatedTotalPrice,
      };
    }


  }
  return shopCart;
}
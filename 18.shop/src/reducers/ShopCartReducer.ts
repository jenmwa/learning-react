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

    const updatedProducts = shopCart.products.map((product) => {
      if (product.id === addedProduct.id) {
        return { ...product, quantity: product.quantity + 1 };
      } else {
        return product;
      }
    });

    const existingProduct = updatedProducts.find(
      (product) => product.id === addedProduct.id
    );

    if (!existingProduct) {
      updatedProducts.push({ ...addedProduct, quantity: 1 });
    }

    const updatedTotalAmount = shopCart.totalAmount + 1;
    const updatedTotalPrice = shopCart.totalPrice + addedProduct.price;

    return {
      ...shopCart,
      products: updatedProducts,
      totalAmount: updatedTotalAmount,
      totalPrice: updatedTotalPrice,
    };
  }
  
  return shopCart;
};
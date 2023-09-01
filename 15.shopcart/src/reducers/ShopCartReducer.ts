// import { ShopCart } from "../models/ShopCart";

// export interface IAction<T> {
//   type: ActionType,
//   payload: T,
// }

// export enum ActionType {
//   ADDED,
//   REMOVED,
//   CHANGED
// }


// export const ShopCartReducer = <T>(shopCart: ShopCart[], action: IAction<T>) => {

//   if (action.type === ActionType.ADDED) {
//     const addedProduct = action.payload;
//     return [...shopCart, addedProduct]
//   }


// }


import { IProducts } from "../models/IProducts";

export interface IAction {
  type: ActionType,
  payload: {
    id: number,
    products: IProducts[],
    // amount: number,
    // totalAmount: number
  }
}

export enum ActionType {
  GOTPRODUCTS,
  ADDED,
  REMOVED,
  CHANGED
}

const initialState: IProducts[] = [];

export const ShopCartReducer = (shopCart: IProducts[] = initialState, action: IAction) => {


  // if (action.type === ActionType.ADDED) {
  //   console.log('click on', action.payload)
  //   const addedProduct = action.payload.products.find((product) => product.id === action.payload.id);
  //   if (addedProduct) {
  //     const existingDonut = shopCart.find((product) => product.id === action.payload.id);
  //     if (existingDonut) {

  //       const updatedCart = shopCart.map((product) => {
  //         if (product.id === action.payload.id) {
  //           return {
  //             ...product, amount: product.amount + action.payload.amount
  //           }
  //         } else {
  //           return product;
  //         }
  //       });
  //       return updatedCart;
  //     } else {
  //       return [...shopCart, addedProduct];
  //     }
  //   }
  //   return shopCart;
  // }

  if (action.type === ActionType.ADDED) {
      return handleAddToCart(shopCart, action);
  }
    else
      return shopCart;
};

const handleAddToCart = (shopCart: IProducts[], action: IAction) => {
  const addedProduct = action.payload.products.find((product) => product.id === action.payload.id);
  
  if (!addedProduct) {
    return shopCart;
  }

  const existingDonut = shopCart.find((product) => product.id === action.payload.id);

  if (existingDonut) {
    return addExistingAmount(shopCart, action);
  } else {
    return [...shopCart, addedProduct];
  }
};

const addExistingAmount = (shopCart: IProducts[], action: IAction) => {
  const updatedCart = shopCart.map((product) => {
    if (product.id === action.payload.id) {
      return {
        ...product,
        amount: product.amount + action.payload.amount
      };
    } else {
      return product;
    }
  });
  return updatedCart;
};

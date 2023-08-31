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
    products: IProducts[]}
}

export enum ActionType {
  ADDED,
  REMOVED,
  CHANGED
}


export const ShopCartReducer = (shopCart: IProducts[], action: IAction) => {

  // if (action.type === ActionType.ADDED) {
  //   console.log(action, shopCart)

  //   const newState = shopCart.products.map((product) => 
  //   product.id === action.payload ? {...product, amount: product.amount + 1 } : product
  //   );
  //   return new ShopCart(newState)

  // }
  // return shopCart;
  // if (action.type === ActionType.ADDED) {
  //   const existingDonut = shopCart.products.find((donut) => donut.id === action.payload);
    
  //   if (existingDonut) {
  //     const updatedProducts = shopCart.products.map((donut) =>
  //       donut.id === existingDonut.id ? { ...donut, amount: donut.amount + 1 } : donut
  //     );
  //     return new ShopCart(updatedProducts);
  //   // } else {
  //   //   const updatedProducts = [...shopCart.products, { ...action.payload, amount: 1 }];
  //   //   return new ShopCart(updatedProducts);
  //    }
  // }

  // return shopCart;

  if (action.type === ActionType.ADDED) {
    console.log('click on', action.payload)
    const addedProduct = action.payload.products.find((product) => product.id === action.payload.id);
    if (addedProduct) {
      return [...shopCart, addedProduct]; // Return a new array with the added product
    }
  }
  return shopCart;
}
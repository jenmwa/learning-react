import { createContext } from "react";
import { IShopcart } from "../models/IShopcart";

const initialShopCart: IShopcart = {
    products: [],
    totalAmount: 0,
    totalPrice: 0,
  };


export const ShopCartContext = createContext<IShopcart>(initialShopCart);
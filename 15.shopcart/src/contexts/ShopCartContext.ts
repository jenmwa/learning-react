import { createContext } from "react";
// import { ShopCart } from "../models/ShopCart";
import { IProducts } from "../models/IProducts";


export const ShopCartContext = createContext<IProducts[]>([])
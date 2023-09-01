import { Dispatch, createContext } from "react";
import { IAction } from "../reducers/ProductsReducer";


export const ProductsDispatchContext = createContext<Dispatch<IAction>>(() => {return; })
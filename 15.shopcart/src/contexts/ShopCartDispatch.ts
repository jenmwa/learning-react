import { Dispatch, createContext } from "react";
import { IAction } from "../reducers/ShopCartReducer";

export const ShopCartDispatchContext = createContext<Dispatch<IAction>>(() => {
    return
})
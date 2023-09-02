import { Dispatch, createContext } from "react";
import { IAction } from "../reducers/OpenShopCartReducer";


export const OpenShopCartDispatchContext = createContext<Dispatch<IAction>>(() => {return;});
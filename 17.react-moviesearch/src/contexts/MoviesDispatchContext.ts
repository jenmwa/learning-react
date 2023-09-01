import { Dispatch, createContext } from "react";
import { IAction } from "../reducers/MoviesReducer";


export const MoviesDispatchContext = createContext<Dispatch<IAction>>(() => { return;})
import { createContext } from "react";
import { IMovie } from "../models/IMovie";

export const MoviesContext = createContext<IMovie[]>([]);
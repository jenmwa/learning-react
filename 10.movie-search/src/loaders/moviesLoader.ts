import axios from "axios";
import { IOmdbResponse } from "../models/IOmdpresponse";
import { IMovie } from "../models/IMovie";

export interface IMoviesLoader {
  movies: IMovie[];
}

export const moviesLoader = async () => {
  const response = await axios.get<IOmdbResponse>('http://www.omdbapi.com/?apikey=5eed9320&s=star');

  console.log(response.data.Search)

  const data: IMoviesLoader = {movies: response.data.Search};
  
  return data;
}
import axios from "axios"
import { IMovie } from "../models/IMovie"
import { ActionFunctionArgs, ParamParseKey, Params } from "react-router-dom";

export interface IMovieLoader {
  movie: IMovie;
}

// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// export const movieLoader = async ({ params }: any )=> {
//   const response = await axios.get<IMovie>('http://www.omdbapi.com/?apikey=5eed9320&i=' + params.movieId)

//   const data: IMovieLoader = {movie: response.data};
//   return data;
// }


const pathNames = {
  movieDetail: '/movie/:movieId',
} as const;

interface Args extends ActionFunctionArgs {
  params: Params<ParamParseKey<typeof pathNames.movieDetail>>;
}

export const movieLoader = async ({ params }: Args )=> {
  const response = await axios.get<IMovie>('http://www.omdbapi.com/?apikey=5eed9320&i=' + params.movieId)

  const data: IMovieLoader = {movie: response.data};
  return data;
}
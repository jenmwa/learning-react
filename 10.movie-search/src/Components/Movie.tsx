import axios from "axios";
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom"
import { IMovie } from "../models/IMovie";
import { IMovieLoader } from "../loaders/movieLoader";


export const Movie = () => {
  // const { movieId } = useParams();
  // const [movie, setMovies] = useState<IMovie>();

  // useEffect(() => {
  //   const getMovie = async () => {
  //     const response = await axios.get<IMovie>('http://www.omdbapi.com/?apikey=5eed9320&i=' + movieId
  //     )
  //     setMovies(response.data)
  //   };
  //   if (!movie) getMovie();
  // })

  const { movie } = useLoaderData() as IMovieLoader;

  return <>
    <h2>{movie?.Title}</h2>
    <img src={movie?.Poster} alt={movie?.Title} />
  </>
}
import { Link } from "react-router-dom";
import { IMovie } from "../models/IMovie"
import { Image } from "./styled/Image";
import { P } from "./styled/P";
import { Span } from "./styled/Span";
import { Title } from "./styled/Title";
import { ImageWrapper, MovieWrapper } from "./styled/Wrapper";
import { useContext } from "react";
import { MoviesDispatchContext } from "../contexts/MoviesDispatchContext";


interface IViewMovieProps {
  movie: IMovie;
}

export const ViewMovie = ({ movie }: IViewMovieProps) => {
  const dispatch = useContext(MoviesDispatchContext)

  const movieSelected = () => {
    dispatch({
      type: 'SELECTED',
      payload: movie.id.toString(),
    })
  }

  return <>
    <MovieWrapper selected={movie.selected}>
      <Title>{movie.name}</Title>
      <ImageWrapper>
        <Image src={movie.imageUrl} alt={movie.name}></Image>
      </ImageWrapper>
      <P>{movie.description}</P>
      <Span>{movie.price} kr</Span>
      <button onClick={movieSelected}>Markera</button>
      <Link to={'/movie/'+ movie.id}>Läs mer...</Link>
    </MovieWrapper>
  </>
}
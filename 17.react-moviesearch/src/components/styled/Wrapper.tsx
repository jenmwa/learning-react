import styled from "styled-components";

interface IMovieSelectedProps {
  selected: boolean,
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const MovieWrapper = styled.div<IMovieSelectedProps> `
  display: flex;
  flex-direction: column;
  width:30%;
  align-items: center;

  background-color: ${(props: IMovieSelectedProps) => props.selected ? '#101010' : 'transparent'};

`;

export const ImageWrapper = styled.div`
  width: 100%;
`;
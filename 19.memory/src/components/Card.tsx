// Types
import { CardType } from "../../src/setup";
// Styles
import { Wrapper, FrontImg, BackImg } from "./styled/Card";

interface ICardProps {
  card: CardType;
  handleCardClick: (card: CardType) => void;
}

export const Card = ({ card, handleCardClick }: ICardProps) => {
  const handleClick = () => {
    if (card.isClickable) handleCardClick(card);
  };
  return (
    <>
      <Wrapper onClick={handleClick}>
        <FrontImg
          flipped={card.isFlipped}
          src={card.frontImage}
          alt="card-front"
        ></FrontImg>
        <BackImg
          flipped={card.isFlipped}
          src={card.backImage}
          alt="card-back"
        ></BackImg>
      </Wrapper>
    </>
  );
};

import { useEffect, useState } from "react";
import { CardType, createBoard } from "../setup";
import { shuffleArray } from "../shuffle";
import { Card } from "./Card";
import { Grid } from "./styled/Grid";

export const GameBoard = () => {
  const [cards, setCards] = useState<CardType[]>(shuffleArray(createBoard()));
  const [gameWon, setGameWon] = useState(false);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [clickedCard, setClickedCard] = useState<undefined | CardType>(
    undefined
  );

  useEffect(() => {
    if (gameWon) {
      return;
    }
    const checkGameWon = () => {
      if (matchedPairs === cards.length / 2) {
        console.log("game won");
        setGameWon(true);
      }
    };
    if (!gameWon) checkGameWon();
  });

  const handleCardClick = (currentClickedCard: CardType) => {
    //flip the card
    setCards((previousCards) =>
      previousCards.map((card) =>
        card.id === currentClickedCard.id
          ? { ...card, isFlipped: true, isClickable: false }
          : card
      )
    );
    if (!clickedCard) {
      setClickedCard({ ...currentClickedCard });
      return;
    }
    if (clickedCard.matchingCardId === currentClickedCard.id) {
      setMatchedPairs((previous) => previous + 1);
      setCards((previous) =>
        previous.map((card) =>
          card.id === clickedCard.id || card.id === currentClickedCard.id
            ? { ...card, isClickable: false }
            : card
        )
      );
      setClickedCard(undefined);
      return;
    }
    setTimeout(() => {
      setCards((previous) =>
        previous.map((card) =>
          card.id === clickedCard.id || card.id === currentClickedCard.id
            ? { ...card, isFlipped: false, isClickable: true }
            : card
        )
      );
    }, 1000);
    setClickedCard(undefined);
  };

  return (
    <>
      <div>
        <Grid>
          {cards.map((card) => (
            <Card
              key={card.id}
              handleCardClick={handleCardClick}
              card={card}
            ></Card>
          ))}
        </Grid>
      </div>
    </>
  );
};

import card1 from '/img/card1.webp';
import card2 from '/img/card2.webp';
import card3 from '/img/card3.webp';
import card4 from '/img/card4.webp';
import card5 from '/img/card5.webp';
import card6 from '/img/card6.webp';
import card7 from '/img/card7.webp';
import card8 from '/img/card8.webp';
import card9 from '/img/card9.webp';
import card10 from '/img/card10.webp';
// Cardback
import cardBack from '/img/card_back.jpg';

export interface CardType {
  id: string;
  isFlipped: boolean;
  backImage: string;
  frontImage: string;
  isClickable: boolean;
  matchingCardId: string;
}

// Put the images in an array
const cards: string[] = [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10];

export const createBoard = (): CardType[] =>
  [...cards, ...cards].map((card, i) => ({
    id: `card${i}`,
    isFlipped: false,
    backImage: cardBack,
    frontImage: card,
    isClickable: true,
    matchingCardId: i < cards.length ? `card${i + cards.length}` : `card${i - cards.length}`
  }));
export interface ICard {
  suit: string;
  value: string;
}

export class Card implements ICard {
  suit = '';
  value = '';
}

enum Suit {
  DIAMONDS = "Diamonds",
  CLUBS = "Clubs",
  HEARTS = "Hearts",
  SPADES = "Spades"
}

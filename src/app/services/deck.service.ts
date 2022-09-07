import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Card } from '../models/card';

const SUITS = ['spades', 'diamonds', 'clubs', 'hearts'];
const VALUES = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

@Injectable({
  providedIn: 'root'
})
export class DeckService {
  deck$ = new BehaviorSubject<Card[]>(this.generateDeck());
  discardPile$ = new BehaviorSubject<Card[]>([]);

  constructor() { }

  public generateDeck(): Card[] {
    let deck: Card[] = [];
    for (let i = 0; i < SUITS.length; i++) {
      for (let x = 0; x < VALUES.length; x++) {
        let card: Card = { value: VALUES[x], suit: SUITS[i] };
        deck.push(card);
      }
    }
    return deck;
  }

  public shuffle(deck?: Card[]): void {
    deck ? deck = deck : deck = this.deck$.getValue();
    for (let i = 0; i < 1000; i++) {
      let location1 = Math.floor(Math.random() * deck.length);
      let location2 = Math.floor(Math.random() * deck.length);
      let tmp = deck[location1];

      deck[location1] = deck[location2];
      deck[location2] = tmp;
    }
    this.deck$.next(deck);
  }

  public addDiscardPileToDeck(): void {
    const deck = this.deck$.getValue();
    const discardPile = this.discardPile$.getValue();
    // let newDeck: Card[] = [];
    this.deck$.next([...deck, ...discardPile]);
  }

  public draw(): Card {
    if (!this.deck$.getValue().length) {
      this.addDiscardPileToDeck();
      this.shuffle();
    }
    const drawnCard = <Card>this.deck$.getValue().pop();
    return drawnCard;
  }

  public discard(card: Card): void {
    let pile = this.discardPile$.getValue();
    pile.push(card);
    this.discardPile$.next(pile);
  }
}

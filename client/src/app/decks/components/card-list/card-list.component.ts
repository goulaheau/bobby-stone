import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Card } from '../../models/card';
import { Deck } from '../../models/deck';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent implements OnInit {
  @Input() cards: Card[];
  @Input() deck: Deck;
  @Input() editable: boolean;

  constructor() { }

  ngOnInit() {
  }

  number(id: number): number {
    let ret = 0;

    if (!this.deck.cards) {
      this.deck.cards = [];
    }

    for (const i in this.deck.cards) {
      if (this.deck.cards[i].id === id) {
        ret++;
      }
    }

    return ret;
  }

  modifyNumber(operation: string, card: Card): void {
    switch (operation) {
      case '+':
        this.deck.cards.push(card);
        break;
      case '-':
        for (const i in this.deck.cards) {
          if (this.deck.cards[i].id === card.id) {
            this.deck.cards.splice(+i, 1);
            break;
          }
        }
        break;
    }
  }
}

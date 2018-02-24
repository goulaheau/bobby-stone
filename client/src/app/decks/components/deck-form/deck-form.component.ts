import {
  Component, EventEmitter, Input, OnInit, Output,
  ViewEncapsulation,
} from '@angular/core';
import { Deck } from '../../models/deck';
import { Card } from '../../models/card';

@Component({
  selector: 'app-deck-form',
  templateUrl: './deck-form.component.html',
  styleUrls: ['./deck-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DeckFormComponent implements OnInit {
  @Input() deck: Deck;
  @Input() cards: Card[];
  @Input() userId: number;

  @Output() save = new EventEmitter<Deck>();
  @Output() update = new EventEmitter<Deck>();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.deck.id) {
      this.update.emit(this.deck as Deck);
    } else {
      this.save.emit(this.deck);
    }
  }
}

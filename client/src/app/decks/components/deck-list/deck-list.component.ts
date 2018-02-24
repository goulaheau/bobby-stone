import {
  Component, EventEmitter, Input, OnInit, Output,
  ViewEncapsulation,
} from '@angular/core';
import { Deck } from '../../models/deck';

@Component({
  selector: 'app-deck-list',
  templateUrl: './deck-list.component.html',
  styleUrls: ['./deck-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DeckListComponent implements OnInit {
  @Input() decks: Deck[];
  @Output() delete = new EventEmitter<Deck>();

  constructor() { }

  ngOnInit() {
  }

  onClickDelete(deck: Deck): void {
    this.delete.emit(deck);
  }
}

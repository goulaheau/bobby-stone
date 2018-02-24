import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
}               from '@angular/core';
import { Deck } from '../../../decks/models/deck';
import { Game } from '../../models/game';
import { Rule } from '../../models/rule';

declare var $: any;

@Component({
  selector: 'app-game-join-modal',
  templateUrl: './game-join-modal.component.html',
  styleUrls: ['./game-join-modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class GameJoinModalComponent implements OnInit {
  deckId: number;

  @Input() modalName: string;
  @Input() decks: Deck[];
  @Input() game: Game;
  @Input() rules: Rule[];

  @Output() join = new EventEmitter<{ deck: number }>();

  constructor() {
  }

  ngOnInit() {
  }

  onJoin(): void {
    this.join.emit({ deck: this.deckId });
    $(`#${this.modalName}`).modal('hide');
  }

  isDeckRespectingRule(deck: Deck): boolean {
    if (!this.game) {
      return false;
    }
    return this.game.rule.cards_in_deck === deck.cards.length;
  }
}

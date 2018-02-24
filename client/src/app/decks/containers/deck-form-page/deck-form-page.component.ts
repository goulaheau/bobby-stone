import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DecksService } from '../../../core/services/decks.service';
import { Observable } from 'rxjs/Observable';
import { Deck } from '../../models/deck';
import { of } from 'rxjs/observable/of';
import { Card } from '../../models/card';
import { CardsService } from '../../../core/services/cards.service';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-deck-form-page',
  templateUrl: './deck-form-page.component.html',
  styleUrls: ['./deck-form-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DeckFormPageComponent implements OnInit {
  deck$: Observable<Deck> = of({});
  cards$: Observable<Card[]>;
  userId: number;

  constructor(private route: ActivatedRoute,
              private decksService: DecksService,
              private cardsService: CardsService,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.authService.current_user().subscribe(
      user => this.userId = user.id,
    );

    this.cards$ = this.cardsService.getAll();

    this.route.params.subscribe(params => {
      const id = +params['id'];

      if (id) {
        this.deck$ = this.decksService.get(id);
      }
    });
  }

  onSave(deck: Deck): void {
    deck.user = this.userId;
    deck.cards = this.cardsToIds(deck.cards);

    this.decksService.post(deck).subscribe(
      () => this.router.navigate(['/decks'])
    );
  }

  onUpdate(deck: Deck): void {
    deck.cards = this.cardsToIds(deck.cards);

    this.decksService.patch(deck.id, deck).subscribe(
      () => this.router.navigate(['/decks'])
    );
  }

  cardsToIds(cards: Card[]): number[] {
    const ids = [];

    cards.forEach(card => ids.push(card.id));

    return ids;
  }
}

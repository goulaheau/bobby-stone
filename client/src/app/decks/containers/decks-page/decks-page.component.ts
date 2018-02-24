import { Component, OnInit } from '@angular/core';
import { User }              from '../../../auth/models/user';
import { DecksService }      from '../../../core/services/decks.service';
import { Observable }        from 'rxjs/Observable';
import { Deck }              from '../../models/deck';
import { AuthService }       from '../../../auth/services/auth.service';

@Component({
  selector: 'app-decks-page',
  templateUrl: './decks-page.component.html',
  styleUrls: ['./decks-page.component.scss'],
})
export class DecksPageComponent implements OnInit {
  decks: Deck[];
  user: User;

  constructor(
    private decksService: DecksService,
    private authService: AuthService) { }

  ngOnInit() {
    this.authService.current_user().subscribe(
      user => {
        this.user   = user;
        this.decksService
          .getAll()
          .subscribe(
            decks => this.decks = decks.filter(deck => deck.user === null || deck.user === this.user.id)
          );
      },
    );
  }

  onDelete(deckToDelete: Deck): void {
    this.decksService.delete(deckToDelete.id).subscribe(
      deckDeleted => this.decks.filter(deck => deck.id !== deckDeleted.id),
    );
  }
}

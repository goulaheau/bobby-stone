import { Logout } from './../../../auth/store/actions/auth.actions';
import { AuthService } from './../../../auth/services/auth.service';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import {
  AfterViewChecked,
  AfterViewInit, ChangeDetectorRef, Component,
  OnInit,
} from '@angular/core';
import * as fromAuth from '../../../auth/store/reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewChecked {
  isLoggedIn$: any;

  constructor(private store: Store<fromAuth.State>,
              private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.isLoggedIn$ = this.store.select(fromAuth.getLoggedIn);
  }

  ngAfterViewChecked(): void {
    this.cdRef.detectChanges();
  }

  logout() { this.store.dispatch(new Logout()); }
}

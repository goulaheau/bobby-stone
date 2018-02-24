import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameFormModalComponent } from './game-join-modal.component';

describe('GameFormModalComponent', () => {
  let component: GameFormModalComponent;
  let fixture: ComponentFixture<GameFormModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameFormModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

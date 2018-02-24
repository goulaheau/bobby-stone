import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckFormPageComponent } from './deck-form-page.component';

describe('DeckFormPageComponent', () => {
  let component: DeckFormPageComponent;
  let fixture: ComponentFixture<DeckFormPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeckFormPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeckFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

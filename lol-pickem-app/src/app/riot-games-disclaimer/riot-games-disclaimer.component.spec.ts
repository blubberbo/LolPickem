import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiotGamesDisclaimerComponent } from './riot-games-disclaimer.component';

describe('RiotGamesDisclaimerComponent', () => {
  let component: RiotGamesDisclaimerComponent;
  let fixture: ComponentFixture<RiotGamesDisclaimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiotGamesDisclaimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiotGamesDisclaimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickemGameComponent } from './game.component';

describe('GameComponent', () => {
  let component: PickemGameComponent;
  let fixture: ComponentFixture<PickemGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PickemGameComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickemGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

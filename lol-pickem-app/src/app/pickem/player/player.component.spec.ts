import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickemPlayerComponent } from './player.component';

describe('PlayerComponent', () => {
  let component: PickemPlayerComponent;
  let fixture: ComponentFixture<PickemPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickemPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickemPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

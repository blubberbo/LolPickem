import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHistoryRecapComponent } from './user-history-recap.component';

describe('UserHistoryRecapComponent', () => {
  let component: UserHistoryRecapComponent;
  let fixture: ComponentFixture<UserHistoryRecapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserHistoryRecapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserHistoryRecapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

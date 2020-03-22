import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickemComponent } from './pickem.component';

describe('PickemComponent', () => {
  let component: PickemComponent;
  let fixture: ComponentFixture<PickemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PickemComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

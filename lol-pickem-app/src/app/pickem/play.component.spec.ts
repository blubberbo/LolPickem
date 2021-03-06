import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpUrlEncodingCodec } from '@angular/common/http';

import { PickemComponent } from './pickem.component';
import { LolPickemService } from '../shared/lol-pickem.service';

describe('PickemComponent', () => {
  let component: PickemComponent;
  let fixture: ComponentFixture<PickemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [PickemComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [LolPickemService, HttpUrlEncodingCodec]
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

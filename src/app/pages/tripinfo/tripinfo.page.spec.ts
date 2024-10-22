import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripinfoPage } from './tripinfo.page';

describe('TripinfoPage', () => {
  let component: TripinfoPage;
  let fixture: ComponentFixture<TripinfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripinfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

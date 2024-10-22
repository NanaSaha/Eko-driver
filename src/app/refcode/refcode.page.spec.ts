import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefcodePage } from './refcode.page';

describe('RefcodePage', () => {
  let component: RefcodePage;
  let fixture: ComponentFixture<RefcodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefcodePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefcodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

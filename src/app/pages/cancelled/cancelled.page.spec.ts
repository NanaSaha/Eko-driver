import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelledPage } from './cancelled.page';

describe('CancelledPage', () => {
  let component: CancelledPage;
  let fixture: ComponentFixture<CancelledPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelledPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelledPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

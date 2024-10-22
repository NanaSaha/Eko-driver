import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddphotoinfoPage } from './addphotoinfo.page';

describe('AddphotoinfoPage', () => {
  let component: AddphotoinfoPage;
  let fixture: ComponentFixture<AddphotoinfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddphotoinfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddphotoinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

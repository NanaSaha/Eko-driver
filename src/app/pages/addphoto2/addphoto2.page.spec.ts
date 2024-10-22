import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addphoto2Page } from './addphoto2.page';

describe('Addphoto2Page', () => {
  let component: Addphoto2Page;
  let fixture: ComponentFixture<Addphoto2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addphoto2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addphoto2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

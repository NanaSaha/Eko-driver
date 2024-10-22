import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addphoto3Page } from './addphoto3.page';

describe('Addphoto3Page', () => {
  let component: Addphoto3Page;
  let fixture: ComponentFixture<Addphoto3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addphoto3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addphoto3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

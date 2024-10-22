import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginEntrancePage } from './login-entrance.page';

describe('LoginEntrancePage', () => {
  let component: LoginEntrancePage;
  let fixture: ComponentFixture<LoginEntrancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginEntrancePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginEntrancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

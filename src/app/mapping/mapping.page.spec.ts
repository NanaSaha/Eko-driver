import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MappingPage } from './mapping.page';

describe('MappingPage', () => {
  let component: MappingPage;
  let fixture: ComponentFixture<MappingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MappingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MappingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

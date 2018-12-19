import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadditPage } from './raddit.page';

describe('RadditPage', () => {
  let component: RadditPage;
  let fixture: ComponentFixture<RadditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadditPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tela01Page } from './tela01.page';

describe('Tela01Page', () => {
  let component: Tela01Page;
  let fixture: ComponentFixture<Tela01Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tela01Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tela01Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

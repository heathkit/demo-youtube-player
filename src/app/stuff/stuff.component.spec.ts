/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StuffComponent } from './stuff.component';

describe('StuffComponent', () => {
  let component: StuffComponent;
  let fixture: ComponentFixture<StuffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StuffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { List02Component } from './list02.component';

describe('List02Component', () => {
  let component: List02Component;
  let fixture: ComponentFixture<List02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ List02Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(List02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

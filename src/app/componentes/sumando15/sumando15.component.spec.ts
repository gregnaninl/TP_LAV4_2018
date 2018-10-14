import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sumando15Component } from './sumando15.component';

describe('Sumando15Component', () => {
  let component: Sumando15Component;
  let fixture: ComponentFixture<Sumando15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sumando15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sumando15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

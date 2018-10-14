import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SumandoComponent } from './sumando.component';

describe('SumandoComponent', () => {
  let component: SumandoComponent;
  let fixture: ComponentFixture<SumandoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SumandoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SumandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

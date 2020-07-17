import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingletraceComponent } from './singletrace.component';

describe('SingletraceComponent', () => {
  let component: SingletraceComponent;
  let fixture: ComponentFixture<SingletraceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingletraceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingletraceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

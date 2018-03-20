import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadstourComponent } from './leadstour.component';

describe('LeadstourComponent', () => {
  let component: LeadstourComponent;
  let fixture: ComponentFixture<LeadstourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadstourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadstourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnteringResultComponent } from './entering-result.component';

describe('EnteringResultComponent', () => {
  let component: EnteringResultComponent;
  let fixture: ComponentFixture<EnteringResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnteringResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnteringResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

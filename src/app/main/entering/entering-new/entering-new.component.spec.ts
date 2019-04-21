import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnteringNewComponent } from './entering-new.component';

describe('EnteringNewComponent', () => {
  let component: EnteringNewComponent;
  let fixture: ComponentFixture<EnteringNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnteringNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnteringNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

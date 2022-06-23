import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnepatientComponent } from './onepatient.component';

describe('OnepatientComponent', () => {
  let component: OnepatientComponent;
  let fixture: ComponentFixture<OnepatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnepatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnepatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

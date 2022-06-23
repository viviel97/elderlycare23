import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllradarComponent } from './allradar.component';

describe('AllradarComponent', () => {
  let component: AllradarComponent;
  let fixture: ComponentFixture<AllradarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllradarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllradarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

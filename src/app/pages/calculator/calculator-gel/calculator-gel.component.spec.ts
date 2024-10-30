import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorGelComponent } from './calculator-gel.component';

describe('CalculatorGelComponent', () => {
  let component: CalculatorGelComponent;
  let fixture: ComponentFixture<CalculatorGelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculatorGelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatorGelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

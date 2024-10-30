import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorDrinkComponent } from './calculator-drink.component';

describe('CalculatorDrinkComponent', () => {
  let component: CalculatorDrinkComponent;
  let fixture: ComponentFixture<CalculatorDrinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculatorDrinkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatorDrinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

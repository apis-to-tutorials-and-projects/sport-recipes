import { TestBed } from '@angular/core/testing';

import { CalculatorDrinkService } from './calculator-drink.service';

describe('CalculatorDrinkService', () => {
  let service: CalculatorDrinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorDrinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

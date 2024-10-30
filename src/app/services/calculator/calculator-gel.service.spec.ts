import { TestBed } from '@angular/core/testing';

import { CalculatorGelService } from './calculator-gel.service';

describe('CalculatorGelService', () => {
  let service: CalculatorGelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorGelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

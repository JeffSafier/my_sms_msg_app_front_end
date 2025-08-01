import { TestBed } from '@angular/core/testing';

import { SignonService } from './signon-service';

describe('SignonService', () => {
  let service: SignonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

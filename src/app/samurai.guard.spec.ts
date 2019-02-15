import { TestBed, async, inject } from '@angular/core/testing';

import { SamuraiGuard } from './samurai.guard';

describe('SamuraiGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SamuraiGuard]
    });
  });

  it('should ...', inject([SamuraiGuard], (guard: SamuraiGuard) => {
    expect(guard).toBeTruthy();
  }));
});

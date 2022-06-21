import { TestBed } from '@angular/core/testing';

import { StudentModuleDataService } from './student-module-data.service';

describe('StudentModuleDataService', () => {
  let service: StudentModuleDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentModuleDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

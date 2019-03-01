import { TestBed } from '@angular/core/testing';
import { describe, expect } from '@angular/core/testing/src/testing_internal';

import { CourseService } from './course.service';

describe('CourseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CourseService = TestBed.get(CourseService);
    expect(service).toBeTruthy();
  });
});

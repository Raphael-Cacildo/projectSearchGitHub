import { TestBed } from '@angular/core/testing';

import { GitHubRestService } from './git-hub-rest.service';

describe('GitHubRestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GitHubRestService = TestBed.get(GitHubRestService);
    expect(service).toBeTruthy();
  });
});

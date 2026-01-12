import { TestBed } from '@angular/core/testing';

import { GroupLoginService } from './group-login.service';

describe('GroupLoginService', () => {
  let service: GroupLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

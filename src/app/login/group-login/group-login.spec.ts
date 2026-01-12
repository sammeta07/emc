import { TestBed } from '@angular/core/testing';

import { GroupLogin } from './group-login';

describe('GroupLogin', () => {
  let service: GroupLogin;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupLogin);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

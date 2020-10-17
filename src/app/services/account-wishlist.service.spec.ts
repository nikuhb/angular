import { TestBed } from '@angular/core/testing';

import { AccountWishlistService } from './account-wishlist.service';

describe('Account.WishlistService', () => {
  let service: AccountWishlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountWishlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

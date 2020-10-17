import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable, of } from 'rxjs';
import { IWishlistItem, WISHLIST_ITEMS } from '../models/account.wishlist';

@Injectable({
  providedIn: 'root'
})
export class AccountWishlistService {

  constructor() {}

  getIWishlistItems(): Observable<IWishlistItem[]> {
    return of(WISHLIST_ITEMS);
  }
}

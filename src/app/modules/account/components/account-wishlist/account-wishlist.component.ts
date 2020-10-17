import { Component, OnInit } from '@angular/core';
import { AccountWishlistService } from '../../../../services/account-wishlist.service';
import { IWishlistItem } from '../../../../models/account.wishlist';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-account-wishlist',
  templateUrl: './account-wishlist.component.html',
  styleUrls: ['./account-wishlist.component.scss']
})
export class AccountWishlistComponent implements OnInit {

  wishList = new BehaviorSubject<IWishlistItem[]>([]);

  constructor(
    private accountWishlistService: AccountWishlistService,
  ) { }

  ngOnInit(): void {
    this.loadWishListInformation();
  }

  private loadWishListInformation(): void {
    this
      .accountWishlistService
      .getIWishlistItems()
      .subscribe(wishList => this.handleWishListInformation(wishList));
  }

  private handleWishListInformation(wishList: IWishlistItem[]): void {
    this
    .wishList
    .next(wishList);
  }
}

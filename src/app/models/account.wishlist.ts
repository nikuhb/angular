export interface IWishlistItem {
  id: number;
  name: string;
  pictureURL: string;
}

const wishListItem: IWishlistItem = {
  id: 1,
  name: 'nike shoes',
  pictureURL: 'https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/f9989e9f-4d8a-4518-8c79-a3ccb3609ee3/air-zoom-terra-kiger-6-trail-running-shoe-XL9zwF.jpg',
};

export const WISHLIST_ITEMS = new Array(100);
WISHLIST_ITEMS.fill(wishListItem);

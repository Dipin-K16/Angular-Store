import { Injectable, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart';

@Injectable({
  providedIn: 'root'
})
export class WishlistService implements OnInit{

  storage = localStorage;

  constructor() { }

ngOnInit(): void {
}

  addWishlistToLocal(product: CartItem[]){
    this.storage.setItem('wishlist',JSON.stringify(product));
  }

  getWishListItemLocal():CartItem[]|[]{
    const wishlistItems = this.storage.getItem('wishlist');
    return wishlistItems ? JSON.parse(wishlistItems) : [];
  }


}

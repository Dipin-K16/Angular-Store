import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart';
import { WishlistService } from 'src/app/services/wishlist/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  wishList: CartItem[]=[];

  constructor(private wishListService: WishlistService){}

  ngOnInit(): void {
      this.wishList = this.wishListService.getWishListItemLocal();
      console.log('wishlist',this.wishList);
    }

    handleRemove(index:number){
      this.wishList.splice(index,1)
      this.wishListService.addWishlistToLocal(this.wishList)
    }

  }






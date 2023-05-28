import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  @Input() product: any;

  addToCart(id: number) {
    console.log("add to cart");
  }

  handleWishlist(event:Event){
    event.stopPropagation();
    console.log("handle wishlist");
  }

}

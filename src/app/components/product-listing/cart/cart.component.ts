import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItemsLocal: CartItem[] = [];//model for local
  cartItems: any[] = []
  subTotal: number=0;

  constructor(private cartService: CartService) {
    this.cartService.cartAddedSubject.subscribe(response => {
      this.getCartItems()
    })
  }

  ngOnInit() {
    this.getCartItems()
    this.cartItemsLocal = this.cartService.getCartItemsLocal();
    console.log("local cart", this.cartItemsLocal);
  }

  getCartItems() {
    this.cartService.getCartItemsByUserId(2).subscribe((response) => {
      this.cartItems = response[0].products;

      this.subTotal=0
      this.cartItemsLocal.forEach(element => {
       this.subTotal= this.subTotal + element.price
        console.log("cart price.........",this.subTotal);
        
      });
      console.log("cart item............", this.cartItems);
    })
  }


  removeFromCart(index:number) {
    const removeCart = localStorage.getItem('cart');
    if(removeCart){
      const cart=JSON.parse(removeCart)
      cart.splice(index,1)
      localStorage.setItem('cart', JSON.stringify(cart));
      this.cartItemsLocal=cart
    }
    console.log(removeCart);
  }



}

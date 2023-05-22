import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  cartItemsLocal: CartItem[]=[];//model for local
  cartItems: any[]=[]

  constructor(private cartService: CartService){

    this.cartService.cartAddedSubject.subscribe(response=>{
      
    })
  }

  getCartItems(){
    this.cartService.getCartItemsByUserId(2).subscribe((response)=>{
      this.cartItems=response[0].products;
      console.log("cart item............",this.cartItems);
    })
  }

  ngOnInit(){
    this.getCartItems()
    this.cartItemsLocal=this.cartService.getCartItemsLocal();
    console.log("local cart",this.cartItemsLocal);
    
  }


}

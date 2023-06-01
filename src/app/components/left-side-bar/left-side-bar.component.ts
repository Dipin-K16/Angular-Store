import { Component, OnInit } from '@angular/core';
import { authGuard } from 'src/app/auth.guard';
import { CartItem } from 'src/app/models/cart';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-left-side-bar',
  templateUrl: './left-side-bar.component.html',
  styleUrls: ['./left-side-bar.component.css']
})
export class LeftSideBarComponent implements OnInit{

  cartSize: number=0; 
  storage = window.localStorage;

 constructor(private cartService: CartService){}

 ngOnInit(): void {

  this.cartSize=this.getCartSize()
  
}

getCartSize(){
  const cart: CartItem[] = this.cartService.getCartItemsLocal();
  return cart.length;
}



}

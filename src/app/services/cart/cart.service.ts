import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CartItem } from 'src/app/models/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  public cartAddedSubject = new Subject<boolean>
 

  storage = window.localStorage;


  addToCart(product: any) {
    return this.http.post<any>('https://fakestoreapi.com/carts', {
      userId: 5,
      date: '2020-02-03',
      products: [
        // { productId: id, quantity: 1 },
        // { productId: id, quantity: 5 }
        product
      ]
    })
  }

  getCartItemsByUserId(userId: number){
    return this.http.get<any>(`https://fakestoreapi.com/carts/user/${userId}`)
  }


  addToCartLocal(cartProduct: CartItem[]): void {
    this.storage.setItem('cart', JSON.stringify(cartProduct));
  }
  
  getCartItemsLocal(): CartItem[] | [] {
    const cartItems = this.storage.getItem('cart');
    return cartItems ? JSON.parse(cartItems) : [];
  }

 

}

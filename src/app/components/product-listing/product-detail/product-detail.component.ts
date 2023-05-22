import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CartItem } from 'src/app/models/cart';
import { CartService } from 'src/app/services/cart/cart.service';
import { ProductListService } from 'src/app/services/product/product-list.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  
  constructor(private productService: ProductListService, private cartService: CartService, private route: ActivatedRoute, private router: Router) { }

  @Input() productDetail: any;
  id: number | undefined;
  product: any;
  quantity = '1';
  cartProduct: any={
    "productId": 1,
    "quantity":5
  }



  ngOnInit(): void {
    this.route.params.subscribe(   //params is used to take index number or id
      (params: Params) => {
        this.id = +params['id'];
        // console.log("iddddddd", this.id);
      })
    if (this.id !== undefined) {
      this.productService.getProductById(this.id).subscribe((result) => {
        this.product = result;
        // console.log("product detailsssssss", this.product);
      })
    }
    else {
      (error: any) => {
        // console.log("Error retrieving product:", error);
      }
    }
  }

  addToCart(id:number){
    this.cartProduct.productId = id;
    console.log("oidddddd", this.cartProduct.productId);
    this.cartService.addToCart(this.cartProduct).subscribe((response)=>{
      if(response.response){
        alert("product added to cart")
        this.cartService.cartAddedSubject.next(true)
      }
      console.log("response", response);
    }); 
  }



  addToCartLocal(id:number){
    const cartItems: CartItem[] = this.cartService.getCartItemsLocal();
    let itemInCart = cartItems.find(item => item.id === this.product.id);
    if (itemInCart) {
      let qty = parseInt(itemInCart.quantity)
      qty += 1;
      itemInCart.quantity = qty.toString()
      itemInCart ? this.cartService.addToCartLocal(cartItems) : null;
    } else {
      cartItems.push(Object.assign(this.product, { quantity: this.quantity }));
      alert("Product added to cart")
      this.cartService.addToCartLocal(cartItems);
    }

  }


}

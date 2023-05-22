import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  @Input() product: any;
  productDetailId: any=null;
  
  addToCart(id: number){
    console.log("add to cart");
    
  }

  showDetail(product: any){
    this.productDetailId=product.id;
    console.log("showwwwww",product);
    
  }



}

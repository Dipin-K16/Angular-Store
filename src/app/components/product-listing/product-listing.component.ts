import { Component, OnInit } from '@angular/core';
import { ProductListService } from 'src/app/services/product/product-list.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent implements OnInit {

  constructor(private productListService: ProductListService) { }
  products: any[] = [];

  ngOnInit(): void {
    this.loadAllProducts()
  }

  loadAllProducts() {
    this.productListService.getAllProducts().subscribe((result: any) => {
      this.products = result;
      // console.log("prodcuct array",this.products);
    })
  }


}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../services/product/product-list.service';

@Component({
  selector: 'app-new-deals',
  templateUrl: './new-deals.component.html',
  styleUrls: ['./new-deals.component.css']
})
export class NewDealsComponent implements OnInit {

  constructor(private productService: ProductListService) { }

  newProducts: any[] = [];
  check: boolean = false;
  productDetail: any;


  ngOnInit(): void {
    this.getProducts()
  }

  getProducts() {
    this.productService.getNewDealsProducts().then(data => {
      this.newProducts = data.products
    })
  }

  handleDetail(product: any){
    this.check = !this.check;
    this.productDetail = product;
  }


  handleClose(){
    this.check = false;
  }
}



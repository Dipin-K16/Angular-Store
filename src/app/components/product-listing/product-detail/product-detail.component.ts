import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductListService } from 'src/app/services/product/product-list.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Input() productDetail: any;
  id: number | undefined;
  product: any;

  constructor(private productService: ProductListService, private route: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
    this.route.params.subscribe(   //params is used to take index number or id
      (params: Params) => {
        this.id = +params['id'];
        console.log("iddddddd", this.id);
      })
    if (this.id !== undefined) {
      this.productService.getProductById(this.id).subscribe((result) => {
        this.product = result;
        console.log("product detailsssssss", this.product);
      })
    }
    else {
      (error: any) => {
        console.log("Error retrieving product:", error);
      }
    }
  }

  addToCart(id:number){

  }

}

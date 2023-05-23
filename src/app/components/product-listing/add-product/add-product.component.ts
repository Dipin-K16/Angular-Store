import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AddProductService } from 'src/app/services/product/add-product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  constructor(private addProductService: AddProductService){}

  productFormGroup = new FormGroup({

    productTitle: new FormControl(),
    productPrice: new FormControl(),
    imagePath: new FormControl(),
    description: new FormControl(),
    category: new FormControl(),
    quantity: new FormControl()
  }
  )

  onProductAdd(){
    const formData = this.productFormGroup.value
    this.addProductService.addProduct(formData).subscribe((response)=>{
      console.log(response)
    })
  }

}

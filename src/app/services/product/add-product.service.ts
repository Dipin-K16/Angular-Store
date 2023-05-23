import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddProductService {

  constructor(private http: HttpClient) { }


  addProduct(formData: any) {
    const apiUrl = 'https://fakestoreapi.com/products';
    console.log("add product workinggg");
    return this.http.post(apiUrl, {
      title: formData.productTitle,
      price: formData.price,
      description: formData.description,
      image: formData.imagePath,
      category: formData.category
    })
  }


}

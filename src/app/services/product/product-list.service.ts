import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  constructor(private http: HttpClient) { }


  getAllProducts(){
    return this.http.get('https://fakestoreapi.com/products');
  }

  getProductById(id:number){
    return this.http.get(`https://fakestoreapi.com/products/${id}`);
  }

  

}

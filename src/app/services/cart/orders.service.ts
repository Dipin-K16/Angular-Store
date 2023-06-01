import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor() { }

  storage = localStorage;

  orderedProduct: any[]=[];
  orderConfirmedProduct: any[]=[];

  addOrdersToLocal(products:any){
    this.storage.setItem('orders',JSON.stringify(products))
  }

  getOrdersFromLocal(){
    return this.storage.getItem('orders');
  }



}

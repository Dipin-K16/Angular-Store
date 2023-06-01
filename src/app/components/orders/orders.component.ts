import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/cart/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit{

  constructor(private orderService: OrdersService){} 

  orders: any;

ngOnInit(): void {

  // const ordersFromLocal = this.orderService.getOrdersFromLocal();
  // this.orders = ordersFromLocal !== null ? ordersFromLocal : [];
  const ordersFromLocal:any = this.orderService.getOrdersFromLocal();
  this.orders = JSON.parse(ordersFromLocal)
  // console.log(" ordered product list",this.orderService.getOrdersFromLocal());
}

}

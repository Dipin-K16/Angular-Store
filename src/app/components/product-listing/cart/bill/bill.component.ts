import { Component, Input, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/cart/orders.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit{

  constructor(private ordersService: OrdersService){}

  @Input() subTotal: any;
  @Input() products:any;

  ngOnInit(): void {
    this.ordersService.addOrdersToLocal(this.products);
  }



}

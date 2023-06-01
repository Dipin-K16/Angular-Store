import { Component } from '@angular/core';
import { OrdersService } from 'src/app/services/cart/orders.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

  constructor(private orderService: OrdersService){}

  handlePayment(){
    alert('Payment Successful');
    this.orderService.orderConfirmedProduct = this.orderService.orderedProduct;
  }

}

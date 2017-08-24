import { Component, OnInit } from '@angular/core';
import { OrderService } from "../order.service";
import { Order } from "../order.module";

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  orderList: Order[];
  
  
  constructor(private queryOrders: OrderService) { }

  ngOnInit() {
    this.orderList = this.queryOrders.getOrders();
  }

}

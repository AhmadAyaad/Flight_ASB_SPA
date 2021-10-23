import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/_services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
})
export class OrderListComponent implements OnInit {
  orders: [];
  response;
  totalPages;
  constructor(private _orderService: OrderService) {}
  page = 1;
  ngOnInit(): void {
    this.getOrders(1);
  }
  pagechanged(event) {
    console.log(event);
    this.page = event;
    this.getOrders(event);
  }
  getOrders(pageNumber?) {
    this._orderService.getOrders(pageNumber).subscribe((res) => {
      this.response = res;
      this.totalPages = this.response.totalRecords;
      this.orders = this.response.data;
    });
  }
}

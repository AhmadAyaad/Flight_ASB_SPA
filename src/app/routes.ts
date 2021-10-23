import { Routes } from '@angular/router';

import { OrderStipperComponent } from './Components/order-stipper/order-stipper.component';
import { OrderListComponent } from './Components/order-list/order-list/order-list.component';
export const routes: Routes = [
  { path: 'order/create', component: OrderStipperComponent },
  { path: 'order', component: OrderListComponent },
];

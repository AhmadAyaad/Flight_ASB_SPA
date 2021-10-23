import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module

// import { PaginationModule } from 'ngx-bootstrap/pagination';

import { RouterModule } from '@angular/router';

import { routes } from './routes';
import { MatNativeDateModule } from '@angular/material/core';
import { AppComponent } from './app.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { OrderStipperComponent } from './Components/order-stipper/order-stipper.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { OrderListComponent } from './Components/order-list/order-list/order-list.component';

@NgModule({
  declarations: [AppComponent, OrderStipperComponent, OrderListComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatStepperModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    RouterModule.forRoot(routes),
    NgxPaginationModule,
    // PaginationModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

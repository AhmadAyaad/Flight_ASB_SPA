import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private _http: HttpClient) {}

  createOrder(order) {
    return this._http.post(`${environment.apiUrl}order/create`, order);
  }

  getOrders(pageNumber?) {
    let params = new HttpParams();
    let pageSize = '10';
    params = params.append('pageNumber', pageNumber);
    params = params.append('pageSize', pageSize);

    return this._http.get(`${environment.apiUrl}order`, { params });
  }
}

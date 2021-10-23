import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import * as signalR from '@aspnet/signalr';
@Injectable({
  providedIn: 'root',
})
export class SignalRServiceService {
  private message;
  private connection: signalR.HubConnection;
  constructor() {
    this.message = new Subject();
    this.connection = new signalR.HubConnectionBuilder()
      .withUrl('http://localhost:64885/orderStatusHub', {
        skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets,
      })
      .build();

    this.connect();
  }
  private connect() {
    this.connection.start().catch((err) => console.log(err));

    this.connection.on('OrderUpdated', (msg) => {
      this.message.next(msg);
    });
  }
  public getMessage() {
    return this.message;
  }

  public disconnect() {
    this.connection.stop();
  }
}

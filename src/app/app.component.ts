import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { SignalRServiceService } from '../app/_services/signal-rservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Flight-SPA';
  private signalRSubscription: Subscription;

  public content;
  constructor(private ss: SignalRServiceService) {
    this.signalRSubscription = this.ss.getMessage().subscribe((message) => {
      this.content = message;
      console.log(this.content);
    });
  }
}

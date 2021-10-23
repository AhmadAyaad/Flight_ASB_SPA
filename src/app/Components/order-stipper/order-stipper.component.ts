import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { OrderForCreateDto } from '../../Dtos/orderForCreateDto';
import { Country } from 'src/app/_models/Country';
import { CountryService } from '../../_services/country.service';
import { OrderService } from '../../_services/order.service';
import { AlertifyService } from '../../_services/alertify.service';
import { SignalRServiceService } from 'src/app/_services/signal-rservice.service';
@Component({
  selector: 'app-order-stipper',
  templateUrl: './order-stipper.component.html',
  styleUrls: ['./order-stipper.component.css'],
})
export class OrderStipperComponent implements OnInit, OnDestroy {
  basicDataFormGroup: FormGroup;
  creditCardFormGroup: FormGroup;
  isEditable = false;
  isLinear = true;
  countries: Country[];
  orderForCreateDto: OrderForCreateDto;
  response;
  subscriber: Subscription;
  signalRSubscription: Subscription;
  orderStatus;
  formData: {};
  constructor(
    private _formBuilder: FormBuilder,
    private _countryService: CountryService,
    private _orderService: OrderService,
    private signalRService: SignalRServiceService,
    private alertifyService: AlertifyService
  ) {
    this.signalRSubscription = this.signalRService.getMessage().subscribe(
      (message) => {
        console.log(this.orderStatus);
        this.alertifyService.success(message);
      },
      (err) => {
        console.log(err);
        this.alertifyService.error(err);
      }
    );
  }

  ngOnInit() {
    this.getCountries();
    this.createStepperForms();
  }
  ngOnDestroy() {
    this.subscriber.unsubscribe();
    this.signalRSubscription.unsubscribe();
  }
  createStepperForms() {
    this.basicDataFormGroup = this._formBuilder.group({
      csutomerNameControl: ['', Validators.required],
      numberOfPerosns: ['', Validators.required],
      selectedCountry: ['', Validators.required],
      departureDate: ['', Validators.required],
    });
    this.creditCardFormGroup = this._formBuilder.group({
      creditCardHolderName: ['', Validators.required],
      creditCardNumber: ['', Validators.required],
    });
  }
  getCountries() {
    this.subscriber = this._countryService.getCountries().subscribe(
      (res) => {
        this.response = res;
        this.countries = this.response.data;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  createOrder() {
    if (this.basicDataFormGroup.valid && this.creditCardFormGroup.valid) {
      this.formData = {
        ...this.basicDataFormGroup.value,
        ...this.creditCardFormGroup.value,
      };
      this.orderForCreateDto = this.maptoOrderDto(this.formData);
      console.log(this.formData, 'here');
      this._orderService.createOrder(this.orderForCreateDto).subscribe(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );
      this.basicDataFormGroup.reset();
      this.creditCardFormGroup.reset();
    }
  }
  private maptoOrderDto(data): OrderForCreateDto {
    return new OrderForCreateDto(
      data.csutomerNameControl,
      data.selectedCountry,
      data.departureDate,
      data.numberOfPerosns,
      false,
      data.creditCardNumber,
      data.csutomerNameControl
    );
  }
}

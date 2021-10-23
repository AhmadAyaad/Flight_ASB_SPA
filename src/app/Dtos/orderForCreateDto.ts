import { ThrowStmt } from '@angular/compiler';

export class OrderForCreateDto {
  cusotmerName: string;
  countryId: Number;
  departure: Date;
  numberOfPersons: Number;
  isTransit: boolean;
  creditCardNumber: Number;
  creditCardHolderName: string;
  constructor(
    cusotmerName: string,
    countryId: Number,
    departure: Date,
    numberOfPersons: Number,
    isTransit: boolean,
    creditCardNumber: Number,
    creditCardHolderName: string
  ) {
    this.cusotmerName = cusotmerName;
    this.countryId = countryId;
    this.creditCardHolderName = creditCardHolderName;
    this.creditCardNumber = creditCardNumber;
    this.departure = departure;
    this.numberOfPersons = numberOfPersons;
    this.isTransit = isTransit;
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Country } from '../_models/Country';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  countries: Country[];
  constructor(private _http: HttpClient) {}

  getCountries() {
    return this._http.get(`${environment.apiUrl}country`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor(private _http: HttpClient) {}

  public getCountries(): any {
    return this._http.get('https://restcountries.com/v3.1/all');
  }

  public handleError(error: any) {
    console.log('Error is: ' + error);
  }
}

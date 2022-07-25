import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
})
export class CountriesComponent implements OnInit {
  public data: any;

  constructor(private _service: CountriesService) {}

  ngOnInit(): void {
    this._service.getCountries().subscribe(
      (response: any) => {
        console.log("response", response);
        console.log('response', Object.keys(response[0].currencies)[0]);
        this.data = response;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

}

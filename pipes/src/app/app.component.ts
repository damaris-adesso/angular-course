import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  promise: Promise<any>;
  title = 'DAmaris';
  myDate: Date = new Date();
  myMoney: number = 1200;
  myObj = {
    name: 'John',
    salary: 9000,
  };
  myNumber: number = 1000.234567;
  stock: number = 3.5666666;
  numbers: number[] = [10, 20, 30, 40, 50, 60, 70, 80];

  constructor() {
    this.promise = this.getPromise()
  }

  getPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve('Promise Response'), 2000);
    });
  }
}

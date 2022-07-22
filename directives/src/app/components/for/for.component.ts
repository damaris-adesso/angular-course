import { Component, OnInit } from '@angular/core';

export interface Student {
  fName: string;
  lName: string;
  score: number;
}

export interface Movie {
  title: string;
  genre: string;
  director: string;
}

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css'],
})
export class ForComponent implements OnInit {
  courses: string[];
  students: Student[];
  movies: Movie[];
  color: string;
  fontSize: string;
  useTdata: boolean;
  classObj: Object;

  constructor() {
    this.courses = ['Angular', 'React', 'Node'];
    this.students = [
      { fName: 'John', lName: 'Bailey', score: 90 },
      { fName: 'Bob', lName: 'Reddy', score: 80 },
    ];
    this.movies = [
      { title: 'Titanic', genre: 'romance', director: 'James Cameron' },
      { title: 'E.T.', genre: 'adventure', director: 'Steven Spielberg' },
      { title: 'Star Wars', genre: 'action', director: 'George Lucas' },
    ];
    this.color = 'green';
    this.fontSize = '40';
    this.useTdata = true;
    this.classObj={
      tdata: this.useTdata
    }
  }

  ngOnInit(): void {}
}

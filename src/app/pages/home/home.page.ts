import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false
})
export class HomePage implements OnInit {

  constructor() { }

  cities: string[] = ['New York', 'London', 'Tokyo', 'Paris', 'Sydney'];
selectedCity: string = '';
imageObject: any = []

  ngOnInit() {
  }

}

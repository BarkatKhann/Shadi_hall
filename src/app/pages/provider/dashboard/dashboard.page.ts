import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone:false
})
export class DashboardPage implements OnInit {
  cities: string[] = ['New York', 'London', 'Tokyo', 'Paris', 'Sydney'];
  selectedCity: string = '';
  constructor() { }

  ngOnInit() {
  }

}

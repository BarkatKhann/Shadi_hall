import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-venue-details',
  templateUrl: './venue-details.page.html',
  styleUrls: ['./venue-details.page.scss'],
  standalone: false
})
export class VenueDetailsPage implements OnInit {
  dates: number[] = [];
  selectedDate: number = new Date().getDate();
  cards = [
    { title: 'Price', perDay: "Full Day", price : "₹ 300000" },
    { title: 'Price', perDay: "Full Day", price : "₹ 300000" },
    { title: 'Price', perDay: "Full Day", price : "₹ 300000" },
    { title: 'Price', perDay: "Full Day", price : "₹ 300000" },
    { title: 'Price', perDay: "Full Day", price : "₹ 300000" },
    { title: 'Price', perDay: "Full Day", price : "₹ 300000" }
  ];

  constructor() {
    this.generateDates();
  }

  generateDates() {
    const today = new Date();
    const totalDays = 30;
    for (let i = 0; i < totalDays; i++) {
      const date = new Date();
      date.setDate(today.getDate() + i);
      this.dates.push(date.getDate());
    }
  }

  selectDate(date: number) {
    this.selectedDate = date;
  }

  ngOnInit() {
  }

}

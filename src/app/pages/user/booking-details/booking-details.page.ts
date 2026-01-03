import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.page.html',
  styleUrls: ['./booking-details.page.scss'],
  standalone: false
})
export class BookingDetailsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild('datePicker', { static: false }) datePicker: any;
selectedDate: string = '2023-08-23'; // Default or fetched value

openDatePicker() {
  this.datePicker.open();
}

setDate(event: any) {
  this.selectedDate = event.detail.value;
}

eventType: string = 'special'; 

eventTypes = [
  { label: 'Special Event', value: 'special' },
  { label: 'Corporate Event', value: 'corporate' },
  { label: 'Social Event', value: 'social' }
];

}

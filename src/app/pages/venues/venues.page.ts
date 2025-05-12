import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-venues',
  templateUrl: './venues.page.html',
  styleUrls: ['./venues.page.scss'],
  standalone: false
})
export class VenuesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  categories: string[] = [
  'All',
  'Club Meeting',
  'Farewell Party',
  'Birthday Party',
  'Conference',
  'Wedding',
  'Baby Shower',
  'Team Events',
  'House Warming'
];
selectedIndex = 0;

selectCategory(index: number) {
  this.selectedIndex = index;
}

venues = [
  {
    name: 'Palazzo Party Hall',
    image: 'assets/images/hall.jpeg',
    price: 300000,
    rating: 5.4
  },
  {
    name: 'Crystal Grand Venue',
    image: 'assets/images/hall2.jpg',
    price: 180000,
    rating: 4.8
  }
];
}

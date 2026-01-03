import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.page.html',
  styleUrls: ['./wishlist.page.scss'],
  standalone: false
})
export class WishlistPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  filters = ['All', 'Special Events', 'Corporate Events'];
selectedFilter = 'All';

groupedWishlist = [
  {
    category: 'Special Events',
    items: [
      {
        title: 'Wedding Hall',
        price: 250000,
        rating: 5.1,
        image: 'assets/images/party-hall1.jpeg'
      },
      {
        title: 'Birthday Event Hall',
        price: 550000,
        rating: 5.1,
        image: 'assets/images/party-hall2.jpeg'
      }
    ]
  },
  {
    category: 'Corporate Events',
    items: [
      {
        title: 'Corporate Meeting Hall',
        price: 50000,
        rating: 5.3,
        image: 'assets/images/party-hall3.jpeg'
      }
    ]
  },
  {
    category: 'Social Events',
    items: [
      {
        title: 'Dinner Party',
        price: 35000,
        rating: 5.3,
        image: 'assets/images/party-hall4.jpeg'
      }
    ]
  }
];

selectFilter(filter: string) {
  this.selectedFilter = filter;
  // Apply filtering logic here if needed
}


}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
  standalone: false
})
export class AccountPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  accountMenu = [
  { icon: 'person', label: 'Edit Profile' },
  { icon: 'calendar', label: 'My Bookings' },
  { icon: 'heart', label: 'Wishlist' },
  { icon: 'card', label: 'Payment Details' },
  { icon: 'help-circle', label: 'Help & Support' },
  { icon: 'notifications', label: 'Notifications' },
  { icon: 'alert-circle', label: 'About Us' },
];

}

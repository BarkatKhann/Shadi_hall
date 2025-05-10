import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  constructor(private router: Router) {}

  cities: string[] = ['New York', 'London', 'Tokyo', 'Paris', 'Sydney'];
  selectedCity: string = '';
  imageObject: any = [];
  imgArr: string[] = [
    'assets/images/party-hall3.jpeg',
    'assets/images/party-hall2.jpeg',
    'assets/images/facebook.jpg',
    // Add more image paths as needed
  ];

  currentSlide = 0;

  slides = [
    {
      title: 'Party Hall',
      desc: 'Book our Party hall now and get 10% offer.',
      validUntil: '12-05-2023',
      img: 'assets/images/party-hall1.jpeg',
    },
    {
      title: 'Banquet Deal',
      desc: 'Flat 20% off on weekends!',
      validUntil: '20-06-2023',
      img: 'assets/images/party-hall2.jpeg',
    },
    {
      title: 'Wedding Offer',
      desc: 'Free DJ setup with bookings.',
      validUntil: '30-06-2023',
      img: 'assets/images/party-hall3.jpeg',
    },
  ];

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }

  venueDetails(event: any, slide: any) {
    event.stopPropagation(); // Prevent parent event (e.g., mouseenter)
    this.router.navigate(['/venue-details'], {
      queryParams: {
        title: slide.title,
        offer: slide.desc,
        validUntil: slide.validUntil
      }
    });
  
  }
  venueCategories = [
    { img: 'assets/images/party-hall3.jpeg', label: 'Get Together' },
    { img: 'assets/images/party-hall2.jpeg', label: 'Party Hall' },
    { img: 'assets/images/party-hall1.jpeg', label: 'Marriage Hall' },
    { img: 'assets/images/party-hall3.jpeg', label: 'Get Together' },
    { img: 'assets/images/party-hall3.jpeg', label: 'Get Together' },
    { img: 'assets/images/party-hall2.jpeg', label: 'Get Together' },
  ];

  featuredVenues = [
    {
      img: 'assets/images/hall.jpeg',
      name: 'Spendlaz Wedding hall',
      rating: '5.2',
    },
    {
      img: 'assets/images/party-hall3.jpeg',
      name: 'Paramount Party Hall',
      rating: '5.0',
    },
    {
      img: 'assets/images/hall2.jpg',
      name: 'Paramount Party Hall',
      rating: '5.0',
    },
    {
      img: 'assets/images/hall.jpeg',
      name: 'Paramount Party Hall',
      rating: '5.0',
    },
    {
      img: 'assets/images/hall.jpeg',
      name: 'Paramount Party Hall',
      rating: '5.0',
    },
  ];

  ngOnInit() {}
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catering-services',
  templateUrl: './catering-services.page.html',
  styleUrls: ['./catering-services.page.scss'],
  standalone: false
})
export class CateringServicesPage implements OnInit {
  
  dessertItems = [
    { name: 'Tiramisu', price: 75, img: 'assets/images/tiramisu.jpeg', selected: false },
    { name: 'Chocolate Fondue', price: 75, img: 'assets/images/chocolate-fondue.jpeg', selected: false },
    { name: 'Vanilla Panna Cotta', price: 75, img: 'assets/images/vanilla.jpeg', selected: false },
    { name: 'Tiramisu', price: 75, img: 'assets/images/tiramisu.jpeg', selected: false },
    { name: 'Chocolate Fondue', price: 75, img: 'assets/images/chocolate-fondue.jpeg', selected: false },
    { name: 'Vanilla Panna Cotta', price: 75, img: 'assets/images/vanilla.jpeg', selected: false },
    { name: 'Tiramisu', price: 75, img: 'assets/images/tiramisu.jpeg', selected: false },
    { name: 'Chocolate Fondue', price: 75, img: 'assets/images/chocolate-fondue.jpeg', selected: false },
    { name: 'Vanilla Panna Cotta', price: 75, img: 'assets/images/vanilla.jpeg', selected: false },
    { name: 'Tiramisu', price: 75, img: 'assets/images/tiramisu.jpeg', selected: false },
    { name: 'Chocolate Fondue', price: 75, img: 'assets/images/chocolate-fondue.jpeg', selected: false },
    { name: 'Vanilla Panna Cotta', price: 75, img: 'assets/images/vanilla.jpeg', selected: false },
    { name: 'Tiramisu', price: 75, img: 'assets/images/tiramisu.jpeg', selected: false },
    { name: 'Chocolate Fondue', price: 75, img: 'assets/images/chocolate-fondue.jpeg', selected: false },
    { name: 'Vanilla Panna Cotta', price: 75, img: 'assets/images/vanilla.jpeg', selected: false },
    { name: 'Tiramisu', price: 75, img: 'assets/images/tiramisu.jpeg', selected: false },
    { name: 'Chocolate Fondue', price: 75, img: 'assets/images/chocolate-fondue.jpeg', selected: false },
    { name: 'Vanilla Panna Cotta', price: 75, img: 'assets/images/vanilla.jpeg', selected: false },
  ];
  constructor() { }

  ngOnInit() {
  }

}

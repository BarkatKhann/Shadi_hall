import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataproviderService } from 'src/app/services/dataprovider.service';
import { StorageService } from 'src/app/services/storage.service';
import { register } from 'swiper/element/bundle';


register();

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  offers: any = [];
  selectedCat:any = 'Venue';
  constructor(private router: Router, public dataProviderService: DataproviderService,
    public storageService: StorageService
  ) { }

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
  CategoriesList: any = [
    // { img: 'assets/images/party-hall3.jpeg', label: 'Get Together' },
    // { img: 'assets/images/party-hall2.jpeg', label: 'Party Hall' },
    // { img: 'assets/images/party-hall1.jpeg', label: 'Marriage Hall' },
    // { img: 'assets/images/party-hall3.jpeg', label: 'Get Together' },
    // { img: 'assets/images/party-hall3.jpeg', label: 'Get Together' },
    // { img: 'assets/images/party-hall2.jpeg', label: 'Get Together' },
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

  proItem: any = [];

  ngOnInit() {

    // this.dataProviderService.getVenues().subscribe((res:any)=>{
    //   console.log('Cat_res:',res)
    //   // this.venueCategories = res.data
    // })
    this.dataProviderService.getProvider().subscribe((res: any) => {
      console.log('pro_res:', res)
      this.proItem = res.data
      this.proItem.forEach((el: any, i: any) => {
        el['isActive'] = i == 0 ? true : false;
      });
    })
    this.getOffersData('VenueOffer');
    this.getCategories('VenueCat');
  }

  changeService(itm: any, i: any) {
    console.log('itm=>', itm)
    this.proItem.filter((f: any, index: any) => {
      if (i != index) {
        f.isActive = false
      }
      else {
        f.isActive = true;
        this.getOffersData(itm.name.split(' ')[0]+'Offer')
        this.getCategories(itm.name.split(' ')[0]+'Cat')
        this.selectedCat = itm.name;
      }
    })
    // itm.
  }

  getOffersData(id: any) {
    this.dataProviderService.getOffers(id).subscribe((res: any) => {
      console.log('offer_res:', res)
      this.offers = res?.data;
    })

  }

  getCategories(id: any) {
    this.dataProviderService.getCatagories(id).subscribe((res: any) => {
      console.log('Cat_res:', res)
      this.CategoriesList = res.data
    })
  }

  goToSpecificCat(cat:any){
    console.log(cat)
    var itm = cat.name.replace(' ','')+'_'+cat.id

      // this.router.navigate(['service', {state}="{tracingId: 123}]);

        this.router.navigateByUrl('/service', { state: { itm:itm,title:cat.provider_type_name , subHeader: this.CategoriesList,selectedSubHeader:cat.name}});
      // this.CategoriesList = res.data
  
  }

}

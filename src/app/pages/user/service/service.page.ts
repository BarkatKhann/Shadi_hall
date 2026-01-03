import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataproviderService } from 'src/app/services/dataprovider.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.page.html',
  styleUrls: ['./service.page.scss'],
  standalone: false
})
export class ServicePage implements OnInit {
  HeaderData: any = {
  };
  itemData: any = [];
  constructor(public router: Router,
    public dataProviderService: DataproviderService,
    public activateRoute: ActivatedRoute) {
    this.HeaderData = this.router.getCurrentNavigation()?.extras?.state;
    this.getServiceList(this.HeaderData.itm)
  }

  ngOnInit() {
  }

  changeSegment(ev: any) {
    var cat = this.HeaderData.subHeader.filter((f: any) => { return f.name == ev.detail.value })
    var itm = cat[0].name.replace(' ', '') + '_' + cat[0].id;
    this.getServiceList(itm)
  }

  getServiceList(itm: any) {
    this.dataProviderService.getSpecificCatagories(itm).subscribe((res: any) => {
      this.itemData = res.data;
      console.log(this.itemData)
    })
  }

  bookNow() {

    this.router.navigate(['service-detail'],)
  }

}

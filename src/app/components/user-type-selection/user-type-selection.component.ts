import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CommonService } from 'src/app/services/common.service';
import { DataproviderService } from 'src/app/services/dataprovider.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-user-type-selection',
  templateUrl: './user-type-selection.component.html',
  styleUrls: ['./user-type-selection.component.scss'],
  standalone: false,
})
export class UserTypeSelectionComponent implements OnInit {
  selectedOption:any;
  showSheet = false;
  providerList:any=[];
  providerData:any;
  constructor(public modalCtrl: ModalController, public commonService: CommonService,public dataProviderService:DataproviderService,
    public router: Router, public storageService : StorageService
  ) { }

  ngOnInit() { }

  selectOption(option:any) {
    this.selectedOption = option;
    if(option==='provider'){
      this.dataProviderService.getProviderList().subscribe((res:any)=>{
        console.log('==>',res.results)
        this.providerList = res.results
      })
    }
    this.showSheet = option === 'provider' ? true : false;
  }

  close() {
    this.modalCtrl.dismiss()
  }
  continue() {
    if (this.selectedOption != null) {
      var data = {
        role: this.selectedOption,
        providerType: this.selectedOption ==='provider'?this.providerData:null
      }
      this.storageService.setUserTye(data)
      this.router.navigate(['register'])
      this.modalCtrl.dismiss();

    }
    else {
      let msg = 'Please select user type'
      this.commonService.presentAlert(msg)
    }
  }



  closeSheet(val?:any) {
    this.providerData = val;
    this.showSheet = false;
  }
}

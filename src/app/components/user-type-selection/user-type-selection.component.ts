import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-user-type-selection',
  templateUrl: './user-type-selection.component.html',
  styleUrls: ['./user-type-selection.component.scss'],
  standalone: false,
})
export class UserTypeSelectionComponent  implements OnInit {
  selectedOption: 'user' | 'provider' | null = null;

  constructor(public modalCtrl: ModalController, public commonService: CommonService,
    public router:Router
  ) { }

  ngOnInit() {}

  selectOption(option: 'user' | 'provider') {
    this.selectedOption = option;
  }

  close(){
     this.modalCtrl.dismiss()
    }
    continue(){
      if(this.selectedOption!=null){
        this.router.navigate(['register'])
        this.modalCtrl.dismiss();

   }
   else{
    let msg='Please select user type'
    this.commonService.presentAlert(msg)
   }
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient,   
      public alertController:AlertController,
      private loadingCtrl: LoadingController,
      private toastController: ToastController,
) { }

  async presentAlert(msg:any) {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: msg,
      buttons: ['Ok'],
    });

    await alert.present();
  }

  public async showLoading(){
  var loading = await this.loadingCtrl.create({
    spinner:'circles',
    cssClass:'',
    translucent:true,
    mode:'ios',
    message:'Please wait',
    duration:3000
  })
}

  hideLoader() {
    this.loadingCtrl.dismiss();
  }

    async presentToast(msg: any) {
      const toast = await this.toastController.create({
        message: msg,
        duration: 2000,
        position: 'bottom',
      });
  
      await toast.present();
    }

}


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';
import { UserTypeSelectionComponent } from 'src/app/components/user-type-selection/user-type-selection.component';
import { CommonService } from 'src/app/services/common.service';
import { Platform } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/services/auth.service';

// import { UmpConsent } from 'ump-consent';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage implements OnInit {
  segmentValue = 'login';
  isEnglish = true;
  userType = 'user';
  showPassword: boolean = false;
  confirmShowPassword: boolean = false;
  registerForm: FormGroup;
  loginForm: FormGroup;
  isSubmitted: boolean = false;
   public isConsentAvailable = false;
  private personalizedAds = false;
  constructor(private router: Router,
    public commonService: CommonService, public fb: FormBuilder,
    private loadingCtrl: LoadingController, private toastController: ToastController,
    public modalCtrl: ModalController,
    private platform: Platform,
    private authService:AuthService
  ) {
    this.registerForm = this.fb.group({
      role: [this.userType],
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      Psw: ['', [Validators.required]],
      cPsw: ['', [Validators.required]]
    });

    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    })
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  confirmTogglePasswordVisibility() {
    this.confirmShowPassword = !this.confirmShowPassword;
  }

  ngOnInit() {
  }

  login() {
    this.commonService.showLoading();
    this.authService.login(this.loginForm.value).subscribe((res: any) => {
      localStorage.setItem('token', res.token)
      this.commonService.hideLoader();
      this.commonService.presentToast(res.message)
    }, err => {
      console.log(err)
      setTimeout(() => {
        this.commonService.hideLoader();
        this.commonService.presentToast(err.error.message)
      }, 1000);
    })
    // this.route.navigate(['/tabs/home']);
  }

  RegisterUser() {
    // this.isSubmitted = true;
    // console.log('form===>', this.registerForm)
    // if (this.registerForm.valid) {
    //   this.commonService.showLoading();
    //   this.authService.registerUser(this.registerForm.value).subscribe((res: any) => {
    //     this.commonService.hideLoader();
    //     this.segmentValue = 'login';
    //   }, err => {
    //     this.commonService.hideLoader();
    //     console.log(err)
    //     // alert('server error')
    //   })

    // }
  }


  async goToRegister() {
    const modal = await this.modalCtrl.create({
      component: UserTypeSelectionComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

  }

public async loader(){
  var loading = await this.loadingCtrl.create({
    spinner:'circles',
    cssClass:'',
    translucent:true,
    mode:'ios',
    message:'Please wait',
    duration:3000
  })
}

goToForgotPsw(){
  this.router.navigate(['forgot-password'])
}

}

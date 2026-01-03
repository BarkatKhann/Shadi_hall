import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';
import { UserTypeSelectionComponent } from 'src/app/components/user-type-selection/user-type-selection.component';
import { CommonService } from 'src/app/services/common.service';
import { Platform } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/services/auth.service';
import { ValidationService } from 'src/app/services/validation.service';
import { StorageService } from 'src/app/services/storage.service';

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
  loginForm: FormGroup;
  isSubmitted: boolean = false;
  public isConsentAvailable = false;
  private personalizedAds = false;
  constructor(private router: Router,
    public commonService: CommonService, public fb: FormBuilder,
    private loadingCtrl: LoadingController, private toastController: ToastController,
    public modalCtrl: ModalController,
    private platform: Platform,
    private authService: AuthService,
    public ValidationService: ValidationService,
    private storage: StorageService,
  ) {

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, ValidationService.emailValidator]],
      Psw: ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  ngOnInit() {
    this.loginForm.reset();
    console.log('okok')
    if (localStorage.getItem('IsSessionExp') == 'true') {
      this.storage.remove('isLoggedIn');
      this.storage.remove('userType');
      this.commonService.presentToast('Session expired, please login again');
      localStorage.setItem('IsSessionExp', 'false');

    }
  }

  get formControl() {
    return this.loginForm.controls;
  }

  login() {
    console.log(this.formControl)
    this.loginForm.markAllAsTouched();
    if (this.loginForm.valid) {
      this.commonService.showLoading();
      this.authService.login(this.loginForm.value).subscribe(async (res: any) => {
        localStorage.setItem('token', res.token)
        this.commonService.hideLoader();
        await this.storage.set('isLoggedIn', true);
        await this.storage.set('userType', res.role);
        res.role === 'user' ? this.router.navigate(['tabs/home']) : this.router.navigate(['tabs/dashboard'])
      }, err => {
        console.log(err);
        setTimeout(() => {
          this.commonService.hideLoader();
          this.commonService.presentToast(err.error.message)
        }, 1000);
      })
    }
    else {
      return;
    }
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

  public async loader() {
    var loading = await this.loadingCtrl.create({
      spinner: 'circles',
      cssClass: '',
      translucent: true,
      mode: 'ios',
      message: 'Please wait',
      duration: 3000
    })
  }

  goToForgotPsw() {
    this.router.navigate(['forgot-password'])
  }

}

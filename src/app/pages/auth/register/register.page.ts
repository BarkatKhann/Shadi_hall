import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CommonService } from 'src/app/services/common.service';
import { StorageService } from 'src/app/services/storage.service';
import { ValidationService } from 'src/app/services/validation.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  userType = 'user';

  constructor(public fb: FormBuilder,
     public router: Router, 
     public commonService: CommonService,
     public authService: AuthService,
     public ValidationService: ValidationService,
     public storageService : StorageService
    ) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3),Validators.maxLength(20),ValidationService.nameValidator]],
      email: ['', [Validators.required,ValidationService.emailValidator]],
      phone: ['', [Validators.required,ValidationService.mobileValidator, Validators.minLength(10),Validators.maxLength(10)]],
      Psw: ['', [Validators.required,Validators.minLength(6)]],
      cPsw: ['', [Validators.required]],
      role:[],
      provider_type:[]
    },{
    validators: ValidationService.matchPasswords('Psw', 'cPsw')
  });
  }

  ngOnInit() {
  }
  
  ionViewWillEnter(){
    this.registerForm.reset();
    var data = this.storageService.getUserType();
    this.userType = data?.role??'user'
    console.log(this.userType);
    this.registerForm.patchValue({role:this.userType})
    this.registerForm.patchValue({provider_type:data?.providerType?.id??null})
  }
get formControl() {
    // this.isValidLogin = this.registerForm.valid ? false : true;
    return this.registerForm.controls;
  }

  RegisterUser() {
    this.registerForm.markAllAsTouched();
    if (this.registerForm.valid) {
      console.log(this.registerForm.value)
      this.commonService.showLoading();
      this.authService.registerUser(this.registerForm.value).subscribe((res: any) => {
        console.log(res)
        this.storageService.setUserTye('')
        this.commonService.hideLoader();
        this.router.navigate(['login'])
      }, async (err:any) => {
        let a = await this.commonService.hideLoader();
        this.commonService.presentToast(err.error.massage);
        // alert('server error')
      })
    }
    else{
      return;
    }


  }

  goToLogin() {
    this.router.navigate(['login'])
  }

}

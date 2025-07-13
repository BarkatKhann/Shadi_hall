import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
  standalone:false
})
export class ForgotPasswordPage implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

  back(){
    this.router.navigate(['login'])
  }
  
  submit(){
    this.router.navigate(['otp-verification'])
  }

}

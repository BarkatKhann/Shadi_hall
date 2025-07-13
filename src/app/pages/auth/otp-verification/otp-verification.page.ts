import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.page.html',
  styleUrls: ['./otp-verification.page.scss'],
  standalone: false,

})
export class OtpVerificationPage implements OnInit {

  constructor( public router:Router) { }

  ngOnInit() {
  }

  emailOtpVerify(){
   this.router.navigate(['set-password'])
  }

}

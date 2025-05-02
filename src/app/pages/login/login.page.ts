import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

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
  showPassword:boolean = false;
  confirmShowPassword:boolean = false;

  constructor(private route: Router) {

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
    this.route.navigate(['/home']);
  }

}

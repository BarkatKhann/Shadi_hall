import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.page.html',
  styleUrls: ['./set-password.page.scss'],
  standalone:false
})
export class SetPasswordPage implements OnInit {

  constructor( public router: Router) { }

  ngOnInit() {
  }

  submit(){
    this.router.navigate(['login'])
  }

}

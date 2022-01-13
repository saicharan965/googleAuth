import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  isloggedin:boolean = false
  constructor(private _login :LoginServiceService) { }

  ngOnInit(): void {
    this._login.onstart()
  }



  tryLogin(){
    this._login.loginWithGoogle()
    this.isloggedin = this._login.isLoggedin
    console.log(this.isloggedin)
  }


  logOutFromGoogle(){
    this._login.logOut()
  }
}

import { Injectable } from '@angular/core';
import { SocialUser, SocialAuthService, GoogleLoginProvider } from 'angularx-social-login';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  socialUser!: SocialUser;
  isLoggedin: boolean = false;  

  constructor( 
    private socialAuthService: SocialAuthService
    ) { }


    onstart(){
      this.socialAuthService.authState.subscribe((user) => {
        this.socialUser = user;
        this.isLoggedin = (user != null);
        console.log(this.socialUser);
      });
    }




     // Initial implicite flow using OAuth2 protocol
  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  // Logout the current session
  logOut(): void {
    this.socialAuthService.signOut();
  }
}

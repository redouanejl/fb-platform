import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";


const baseUrl = `${environment.apiUrl}/accounts`;

@Injectable({providedIn: 'root'})
export class AccountService {

  logwithFacebook() {
    FB.login(response => {
      console.log('response', response)
    }, {scope: 'public_profile'});
  }

  initFacebook() {
    setTimeout(() => {
      FB.init({
        appId      : '864152144854304',
        xfbml      : true,
        version    : 'v15.0'
      });
      FB.getLoginStatus(function(response) {
        console.log(response)
      });
    }, 500)

  }

}

export class AccountServiceService {
}

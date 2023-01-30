import {Component, OnInit} from '@angular/core';
import {SocialUser} from "@abacritt/angularx-social-login";
import {AccountService} from "./services/account-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user?: SocialUser;
  loggedIn?: boolean;

  constructor(private authService: AccountService) {
  }

  signInWithFB(): void {
    this.authService.logwithFacebook();
  }

  ngOnInit() {
    this.authService.initFacebook();
  }

  signOut(): void {
  }

}

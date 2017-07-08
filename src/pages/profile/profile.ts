import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  fullName: string = "Profile";
  constructor(public navCtrl: NavController) {

  }

}

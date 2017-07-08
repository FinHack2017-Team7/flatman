import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutUsPage } from './about/about';

import * as firebase from 'firebase/app';
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  constructor(public navCtrl: NavController) {

  }
  aboutUs() {
    this.navCtrl.push(AboutUsPage);
  }

  signOutUser() {
      firebase.auth().signOut();
  }

}
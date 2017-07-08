import { Component } from '@angular/core';
import { NavController, App} from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

import { SettingsPage } from './settings/settings';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})

export class ProfilePage {

  displayName: string = "Profile";
  constructor(public navCtrl: NavController, public appCtrl: App, public afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
      console.log(user.displayName);
      this.displayName = user.displayName;
    });
  }

  goSettingsPage() {
    this.appCtrl.getRootNav().push(SettingsPage);
  }


}

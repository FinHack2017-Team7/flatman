import { Component } from '@angular/core';
import { NavController ,App} from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { ProfilePage } from '../../../profile/profile';
@Component({
  selector: 'page-preference',
  templateUrl: 'preference.html'
})
export class PreferencePage {
  constructor(public navCtrl: NavController,public db: AngularFireDatabase,public appCtrl : App) {
  }

  goToTabs(){
      this.appCtrl.getRootNav().push(ProfilePage);
  }

}

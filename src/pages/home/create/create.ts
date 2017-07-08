import { Component } from '@angular/core';
import { NavController , NavParams} from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
@Component({
  selector: 'page-create',
  templateUrl: 'create.html'
})
export class CreatePage {
  public flat: FirebaseObjectObservable<any>;
  constructor(public navCtrl: NavController,public db: AngularFireDatabase,public navParams: NavParams) {
      this.navCtrl = navCtrl;
  }


}

import { Component } from '@angular/core';
import { NavController , App , NavParams} from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
@Component({
  selector: 'page-flat',
  templateUrl: 'flat.html'
})
export class FlatmatePage {
  public flat: FirebaseObjectObservable<any>;
  constructor(public navCtrl: NavController,public db: AngularFireDatabase,public appCtrl : App , public navParams : NavParams) {
      this.navCtrl = navCtrl;
      this.navParams = navParams;
      this.flat = this.navParams.get('flat');
  }

  goToDetail(flat){
  }

}

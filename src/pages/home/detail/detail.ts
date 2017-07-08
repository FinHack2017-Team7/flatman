import { Component } from '@angular/core';
import { NavController , NavParams,App} from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { TabsPage } from '../../tabs/tabs';


@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {
  public flat: FirebaseObjectObservable<any>;
  constructor(public navCtrl: NavController,public db: AngularFireDatabase,public navParams: NavParams , public appCtrl : App) {
      this.navCtrl = navCtrl;
      this.navParams = navParams;
      this.flat = this.navParams.get('flat');
  }

  joinUs(){
    this.db.list('/favourite').push(this.flat);
    this.navCtrl.setRoot(TabsPage);
  }


}

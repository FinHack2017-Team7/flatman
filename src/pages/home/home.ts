import { Component } from '@angular/core';
import { NavController ,App} from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { DetailPage } from './detail/detail';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public flatList: FirebaseListObservable<any[]>;
  constructor(public navCtrl: NavController,public db: AngularFireDatabase,public appCtrl : App) {
       this.flatList = this.db.list('/flat');
  }

  goToDetail(flat){
      this.appCtrl.getRootNav().push(DetailPage,{flat:flat});
  }

}

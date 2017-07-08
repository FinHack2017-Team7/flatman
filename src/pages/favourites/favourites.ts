import { Component } from '@angular/core';
import { NavController , App } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { FlatmatePage } from './flat/flat';
@Component({
  selector: 'page-favourites',
  templateUrl: 'favourites.html'
})
export class FavouritesPage {
  public favouriteList: FirebaseListObservable<any[]>;
  constructor(public navCtrl: NavController,public db: AngularFireDatabase,public appCtrl : App) {
       this.favouriteList = this.db.list('/favourite');
  }

  goToDetail(flat){
      this.appCtrl.getRootNav().push(FlatmatePage,{flat:flat});
  }

}

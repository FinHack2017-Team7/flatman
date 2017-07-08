import { Component } from '@angular/core';
import { NavController ,App} from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { DetailPage } from './detail/detail';
import { FlatmatePage } from './flat/flat';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public flatList: FirebaseListObservable<any[]>;
  public choice: string;
  public favouriteList: FirebaseListObservable<any[]>;
  constructor(public navCtrl: NavController,public db: AngularFireDatabase,public appCtrl : App) {
       this.flatList = this.db.list('/flat');
       this.favouriteList = this.db.list('/favourite');
       this.choice = "homes";
  }

// Homes
  goToHomeDetail(flat){
      this.appCtrl.getRootNav().push(DetailPage,{flat:flat});
  }

  // Favourites
  goToFavouritesDetail(flat){
      this.appCtrl.getRootNav().push(FlatmatePage,{flat:flat});
  }

}

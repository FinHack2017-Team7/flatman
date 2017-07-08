import { Component } from '@angular/core';
import { NavController , App } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
@Component({
  selector: 'page-bank',
  templateUrl: 'bank.html'
})
export class BankPage {
  public favouriteList: FirebaseListObservable<any[]>;
  constructor(public navCtrl: NavController,public db: AngularFireDatabase,public appCtrl : App) {
  }

  goToDetail(flat){
  }

}

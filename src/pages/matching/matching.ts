import { Component } from '@angular/core';
import { NavController , App } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-matching',
  templateUrl: 'matching.html'
})

export class MatchingPage {
  public favouriteList: FirebaseListObservable<any[]>;
  public cardArray: Observable<any[]>;
  public user: any;
  public flag: number;
  public stackArray: any[] = [
    {
      displayName: "John Doe",
      gender: "Female",
      school: "HKU",
      photoDisplay: "https://randomuser.me/api/portraits/women/46.jpg",
      description: "Loves shopping and partying"
    },
    {
      displayName: "Doje Joine",
      gender: "Male",
      school: "PUHK",
      photoDisplay: "https://randomuser.me/api/portraits/men/87.jpg",
      description: "Loves greenery and gym"
    },
    {
      displayName: "Celia Caron",
      gender: "Female",
      school: "HKU",
      photoDisplay: "https://randomuser.me/api/portraits/women/85.jpg",
      description: "Loves greenery and hiking."
    },
  ]
  
  constructor(public navCtrl: NavController,public db: AngularFireDatabase, public appCtrl : App, public http: Http) {
    console.log(this.stackArray);
    this.flag = 0;
    this.user = this.stackArray[this.flag];
  }

  swipeEvent(e) {
    console.log("Swiped");
    this.flag++;
    if (this.flag > 2) {
      this.flag = 0;
    }
    this.user = this.stackArray[this.flag];
    console.log(this.flag);
    console.log(this.user);
  }

  approve() {
    this.flag++;
    if (this.flag > 2) {
      this.flag = 0;
    }
    this.user = this.stackArray[this.flag];
  }

  disapprove() {
    this.flag++;
    if (this.flag > 2) {
      this.flag = 0;
    }
    this.user = this.stackArray[this.flag];
  }

}

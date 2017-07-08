import { Component } from '@angular/core';
import { NavController, App , Platform} from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})
export class SignInPage {
  // public user: Observable<firebase.User>;
  userProfile: any = null;

  constructor(public navCtrl: NavController, public afAuth: AngularFireAuth, public plt :Platform) {
  }

  logIn() {
    if (this.plt.is('mobileweb')) {
      this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(result =>{
         this.navCtrl.setRoot(TabsPage);
      });
    }else{
      this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider()).then(result =>{
        this.navCtrl.setRoot(TabsPage);
      });
    }
   
  }

  signUp() {
  }

}

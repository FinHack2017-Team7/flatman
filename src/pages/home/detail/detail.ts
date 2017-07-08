import { Component } from '@angular/core';
import { NavController , NavParams} from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent,
 LatLng,
 CameraPosition,
 MarkerOptions,
 Marker
} from '@ionic-native/google-maps';
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {
  public flat: FirebaseObjectObservable<any>;
  constructor(public navCtrl: NavController,public db: AngularFireDatabase,public navParams: NavParams) {
      this.navCtrl = navCtrl;
      this.navParams = navParams;
      this.flat = this.navParams.get('flat');
      let element: HTMLElement = document.getElementById('map');

      let map: GoogleMap = this.googleMaps.create(element);
  }


}
